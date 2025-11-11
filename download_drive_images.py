"""
Google Drive OAuth 인증 기반 이미지 일괄 다운로드 스크립트
임주영 트레이너 포트폴리오용
"""

import os
import io
import re

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.http import MediaIoBaseDownload

# Drive 읽기 전용 권한
SCOPES = ["https://www.googleapis.com/auth/drive.readonly"]

CLIENT_SECRET_FILE = "client_secret.json"
TOKEN_FILE = "token.json"
OUTPUT_DIR = "./public/images"

# 다운로드할 이미지 목록 (스프레드시트에서 추출)
IMAGE_URLS = {
    "profile.jpg": "https://drive.google.com/open?id=1f8fEhjKsanuR9RzrDHC3dQzMW8R4Y0QD",
    "award_1.jpg": "https://drive.google.com/open?id=14BcWv5HLNFPz253Id9lyuO9ZAohtBbla",
}


def get_drive_service():
    """OAuth 인증 후 Drive API 서비스 객체 반환"""
    creds = None

    if os.path.exists(TOKEN_FILE):
        creds = Credentials.from_authorized_user_file(TOKEN_FILE, SCOPES)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                CLIENT_SECRET_FILE, SCOPES
            )
            creds = flow.run_local_server(port=0)

        with open(TOKEN_FILE, "w") as token:
            token.write(creds.to_json())

    service = build("drive", "v3", credentials=creds)
    return service


def extract_file_id(file_url: str) -> str:
    """
    Google Drive URL에서 파일 ID 추출
    지원 형식:
    - https://drive.google.com/file/d/FILE_ID/view
    - https://drive.google.com/open?id=FILE_ID
    - FILE_ID (직접 입력)
    """
    if "/" not in file_url and "?" not in file_url:
        return file_url

    # /file/d/FILE_ID/ 패턴
    m = re.search(r"/file/d/([^/]+)/", file_url)
    if m:
        return m.group(1)

    # ?id=FILE_ID 패턴
    m = re.search(r"[?&]id=([^&]+)", file_url)
    if m:
        return m.group(1)

    raise ValueError(f"파일 ID 추출 실패: {file_url}")


def download_drive_file(file_url: str, output_path: str):
    """Google Drive 파일 다운로드"""
    service = get_drive_service()
    file_id = extract_file_id(file_url)

    # 메타데이터 확인
    try:
        file_meta = service.files().get(fileId=file_id, fields="name, mimeType").execute()
        print(f"[INFO] 파일: {file_meta.get('name')} ({file_meta.get('mimeType')})")
    except Exception as e:
        print(f"[ERROR] 파일 메타데이터 가져오기 실패: {e}")
        return False

    # 파일 다운로드
    try:
        request = service.files().get_media(fileId=file_id)
        fh = io.FileIO(output_path, "wb")
        downloader = MediaIoBaseDownload(fh, request)

        done = False
        while not done:
            status, done = downloader.next_chunk()
            if status:
                print(f"[DOWNLOAD] {int(status.progress() * 100)}% 완료")

        print(f"[DONE] 저장 완료 → {output_path}\n")
        return True
    except Exception as e:
        print(f"[ERROR] 다운로드 실패: {e}\n")
        return False


def main():
    """모든 이미지 다운로드"""
    # 출력 디렉토리 생성
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    downloaded = []
    failed = []

    print("=" * 60)
    print("임주영 트레이너 포트폴리오 이미지 다운로드 시작")
    print("=" * 60)
    print()

    for filename, url in IMAGE_URLS.items():
        output_path = os.path.join(OUTPUT_DIR, filename)
        print(f"[다운로드 중] {filename}")
        print(f"    URL: {url}")

        if download_drive_file(url, output_path):
            downloaded.append(filename)
        else:
            failed.append(filename)

    # 결과 요약
    print("\n" + "=" * 60)
    print(f"✅ 다운로드 완료: {len(downloaded)}개")
    print(f"❌ 다운로드 실패: {len(failed)}개")
    print("=" * 60)

    if downloaded:
        print("\n[다운로드된 이미지]")
        for filename in downloaded:
            print(f"  - {filename}")

    if failed:
        print("\n[실패한 이미지]")
        for filename in failed:
            print(f"  - {filename}")


if __name__ == "__main__":
    main()
