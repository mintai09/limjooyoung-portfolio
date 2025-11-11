# 시작 가이드

임주영 트레이너 포트폴리오 웹사이트를 사용하기 위한 단계별 가이드입니다.

## 📋 체크리스트

완성된 포트폴리오를 확인하기 전에 다음 단계를 완료하세요:

- [x] ✅ 프로젝트 구조 생성
- [x] ✅ React + Vite 설정
- [x] ✅ Tailwind CSS 설정
- [x] ✅ 모든 컴포넌트 구현
- [x] ✅ 실제 데이터 통합
- [ ] ⏳ Google Drive 이미지 다운로드 (아래 참조)

## 🚀 빠른 시작

### 1단계: 개발 서버 실행

```bash
cd limjooyoung-portfolio
npm run dev
```

브라우저에서 http://localhost:5173 으로 접속하세요.

현재는 플레이스홀더 이미지가 표시됩니다.

### 2단계: 실제 이미지 다운로드

#### 필수 사전 작업

1. **Python 패키지 설치**
   ```bash
   pip install google-auth google-auth-oauthlib google-auth-httplib2 google-api-python-client
   ```

2. **Google Cloud Console 설정**
   - [Google Cloud Console](https://console.cloud.google.com/) 접속
   - 새 프로젝트 생성 또는 기존 프로젝트 선택
   - **API 및 서비스 > 라이브러리** 메뉴
   - "Google Drive API" 검색 후 **활성화**
   - **API 및 서비스 > 사용자 인증 정보** 메뉴
   - **사용자 인증 정보 만들기 > OAuth 클라이언트 ID** 클릭
   - **애플리케이션 유형**: **데스크톱 앱** 선택
   - 생성된 JSON 파일 다운로드
   - 다운로드한 파일을 `client_secret.json`으로 프로젝트 루트에 저장

3. **이미지 다운로드 실행**
   ```bash
   python download_drive_images.py
   ```

4. **OAuth 인증**
   - 브라우저가 자동으로 열립니다
   - Google 계정으로 로그인
   - Drive 읽기 권한 승인
   - `token.json` 파일이 자동 생성됩니다 (다음부터는 재인증 불필요)

5. **이미지 경로 업데이트**

   `src/data/profileData.js` 파일을 열고 다음과 같이 수정:

   ```javascript
   images: {
     profilePhoto: "/images/profile.jpg",  // placeholder.svg에서 변경
     awards: [
       "/images/award_1.jpg",              // placeholder.svg에서 변경
     ],
   },
   ```

6. **브라우저 새로고침**

   개발 서버가 실행 중이라면 자동으로 반영됩니다.

## 🖼️ 다운로드할 이미지 목록

Google Drive에서 다운로드될 이미지:

1. **profile.jpg** - 메인 바디 프로필 사진
   - 소스: https://drive.google.com/open?id=1f8fEhjKsanuR9RzrDHC3dQzMW8R4Y0QD
   - 위치: `public/images/profile.jpg`
   - 용도: Hero 섹션 배경

2. **award_1.jpg** - 수상 경력 사진
   - 소스: https://drive.google.com/open?id=14BcWv5HLNFPz253Id9lyuO9ZAohtBbla
   - 위치: `public/images/award_1.jpg`
   - 용도: Awards 섹션

## 🏗️ 프로덕션 빌드

이미지 다운로드 완료 후:

```bash
# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

빌드된 파일은 `dist/` 폴더에 생성됩니다.

## 🎨 디자인 확인 사항

✅ **완료된 항목:**
- 블랙 컬러 베이스 테마
- 골드(#d4af37) 악센트 컬러
- 바디 프로필 강조 Hero 섹션
- 반응형 디자인 (모바일/태블릿/데스크톱)
- 부드러운 애니메이션 효과
- 조건부 섹션 렌더링

## 📱 섹션 구성

현재 활성화된 섹션:
- ✅ **Hero Section** - 바디 프로필 배경
- ✅ **About Section** - 소개 및 기본 정보
- ✅ **Qualifications Section** - 자격증 9개
- ✅ **Awards Section** - 수상 경력 5개
- ✅ **Contact Section** - 전화/이메일/인스타그램

## 🔍 문제 해결

### 이미지가 표시되지 않아요
1. `download_drive_images.py`를 실행했는지 확인
2. `public/images/` 폴더에 이미지 파일이 있는지 확인
3. `profileData.js`의 이미지 경로가 올바른지 확인
4. 개발 서버를 재시작 해보세요

### OAuth 인증이 실패해요
1. `client_secret.json` 파일이 올바른 위치에 있는지 확인
2. Google Drive API가 활성화되어 있는지 확인
3. `token.json`을 삭제하고 다시 시도

### 개발 서버가 시작되지 않아요
```bash
# node_modules 재설치
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## 📞 지원

문제가 계속되면 다음 정보를 포함하여 문의하세요:
- 오류 메시지 전문
- 실행 환경 (OS, Node 버전)
- 진행한 단계

## 🎉 완료!

모든 단계를 완료하면:
- ✅ 에러 없이 실행되는 웹사이트
- ✅ 실제 이미지가 표시되는 포트폴리오
- ✅ 프로덕션 배포 준비 완료

---

**다음 단계:**
- GitHub Pages나 Vercel에 배포하기
- 커스텀 도메인 연결하기
- SEO 최적화 추가하기
