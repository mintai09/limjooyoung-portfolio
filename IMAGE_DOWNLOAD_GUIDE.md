# 이미지 다운로드 가이드

이 포트폴리오는 Google Drive에 저장된 이미지를 사용합니다. OAuth 인증을 통해 이미지를 다운로드해야 합니다.

## 사전 준비

### 1. Python 패키지 설치

```bash
pip install google-auth google-auth-oauthlib google-auth-httplib2 google-api-python-client
```

### 2. Google Cloud Console 설정

1. [Google Cloud Console](https://console.cloud.google.com/) 접속
2. 프로젝트 생성 또는 선택
3. **API 및 서비스 > 라이브러리** → "Google Drive API" 검색 후 활성화
4. **API 및 서비스 > 사용자 인증 정보**
5. **사용자 인증 정보 만들기 > OAuth 클라이언트 ID**
6. **애플리케이션 유형**: 데스크톱 앱 선택
7. JSON 다운로드 → 프로젝트 루트에 `client_secret.json`으로 저장

## 이미지 다운로드 실행

```bash
# 스크립트 실행
python download_drive_images.py
```

최초 실행 시:
1. 브라우저가 자동으로 열립니다
2. Google 계정으로 로그인
3. Drive 읽기 권한 승인
4. `token.json` 파일이 자동 생성됩니다 (다음부터는 재사용)

## 다운로드되는 이미지

- `profile.jpg` - 메인 프로필 사진 (바디 프로필)
- `award_1.jpg` - 수상 이력 사진

## 보안 주의사항

다음 파일들은 **절대 Git에 커밋하지 마세요**:
- `client_secret.json` - OAuth 클라이언트 비밀키
- `token.json` - 액세스 토큰

이미 `.gitignore`에 추가되어 있습니다.

## 문제 해결

### "파일 ID 추출 실패" 에러
- Google Drive URL 형식을 확인하세요
- 공유 설정이 "링크가 있는 모든 사용자"로 되어 있는지 확인하세요

### "권한 거부" 에러
- `token.json` 파일을 삭제하고 다시 인증하세요
- Google Drive API가 활성화되어 있는지 확인하세요

### 다운로드 실패
- 파일이 Drive에서 삭제되지 않았는지 확인하세요
- 네트워크 연결을 확인하세요
