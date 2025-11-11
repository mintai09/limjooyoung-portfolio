# 임주영 트레이너 포트폴리오

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css)](https://tailwindcss.com)

헬스 트레이너 임주영의 개인 포트폴리오 웹사이트입니다.

## ✨ 주요 특징

- 🎨 **블랙 테마**: 바디 프로필이 강조되는 고급스러운 블랙 컬러 디자인
- 📱 **완전 반응형**: 모바일, 태블릿, 데스크톱 최적화
- ⚡ **빠른 로딩**: Vite 기반의 초고속 빌드
- 🎯 **조건부 렌더링**: 실제 데이터만 표시되는 스마트 섹션 관리
- 🔒 **데이터 정확성**: 실제 스프레드시트 데이터만 사용 (허위 정보 없음)

## 🏗️ 기술 스택

### Frontend
- **React 19** - 최신 React 버전
- **Vite** - 차세대 프론트엔드 빌드 도구
- **Tailwind CSS 3** - 유틸리티 기반 CSS 프레임워크

### Fonts
- **Inter** - 본문용 폰트
- **Montserrat** - 제목용 디스플레이 폰트

## 📁 프로젝트 구조

```
limjooyoung-portfolio/
├── public/
│   └── images/              # 이미지 파일 (바디 프로필, 수상 사진 등)
├── src/
│   ├── components/          # React 컴포넌트
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── QualificationsSection.jsx
│   │   ├── AwardsSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── profileData.js   # 실제 스프레드시트 데이터
│   ├── App.jsx              # 메인 앱 컴포넌트
│   ├── index.css            # Tailwind CSS 설정
│   └── main.jsx             # 앱 진입점
├── download_drive_images.py # Google Drive 이미지 다운로드 스크립트
├── IMAGE_DOWNLOAD_GUIDE.md  # 이미지 다운로드 가이드
├── tailwind.config.js       # Tailwind 설정
├── postcss.config.js        # PostCSS 설정
└── package.json
```

## 🚀 시작하기

### 사전 요구사항

- Node.js 18+ 설치
- npm 또는 yarn 패키지 매니저

### 설치

```bash
# 저장소 클론 (또는 다운로드)
cd limjooyoung-portfolio

# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 http://localhost:5173 으로 접속

### 프로덕션 빌드

```bash
npm run build
```

빌드된 파일은 `dist/` 폴더에 생성됩니다.

### 빌드 미리보기

```bash
npm run preview
```

## 🖼️ 이미지 다운로드

이 포트폴리오는 Google Drive에 저장된 이미지를 사용합니다.

### 이미지 다운로드 방법

자세한 내용은 [IMAGE_DOWNLOAD_GUIDE.md](./IMAGE_DOWNLOAD_GUIDE.md)를 참조하세요.

**간단 요약:**

1. Python 패키지 설치:
   ```bash
   pip install google-auth google-auth-oauthlib google-auth-httplib2 google-api-python-client
   ```

2. Google Cloud Console에서 OAuth 클라이언트 ID 생성 후 `client_secret.json` 저장

3. 스크립트 실행:
   ```bash
   python download_drive_images.py
   ```

4. 브라우저에서 Google 로그인 및 권한 승인

## 📊 데이터 출처

이 포트폴리오의 모든 데이터는 다음 스프레드시트에서 추출되었습니다:

- **스프레드시트 URL**: https://docs.google.com/spreadsheets/d/1QV5deQ0tb9FIzFkyWjSKcROJvASrk6OsyEeXKUCuucw/
- **시트 ID**: 1289156437
- **최종 업데이트**: 2025-11-11

### ⚠️ 데이터 무결성 원칙

1. **실제 데이터만 사용**: 스프레드시트에 제공된 내용만 표시
2. **허위 정보 없음**: 과장되거나 추가된 정보 없음
3. **조건부 렌더링**: 선택되지 않은 섹션은 표시하지 않음
4. **빈 값 처리**: 제공되지 않은 정보는 표시하지 않음

## 📱 섹션 구성

### 항상 표시되는 섹션
- **Hero Section**: 바디 프로필이 강조되는 메인 화면
- **About Section**: 소개 및 기본 정보
- **Contact Section**: 연락처 정보

### 조건부 섹션 (제공된 경우만 표시)
- **Qualifications Section**: 자격증 및 경력 (✅ 표시됨)
- **Awards Section**: 수상 경력 (✅ 표시됨)
- **Projects Section**: 프로젝트/작품 경력 (❌ 미제공)

## 🎨 디자인 시스템

### 색상 팔레트

```css
/* Primary Colors */
Black: #000000
Dark: #0a0a0a
Gray: #1a1a1a
Light: #2a2a2a

/* Accent Colors */
Gold: #d4af37
Silver: #c0c0c0
```

### 타이포그래피

- **Display**: Montserrat (제목)
- **Body**: Inter (본문)

## 🔐 보안 주의사항

다음 파일들은 **절대 Git에 커밋하지 마세요**:

- `client_secret.json` - OAuth 클라이언트 비밀키
- `token.json` - 액세스 토큰
- `.env` - 환경 변수

이미 `.gitignore`에 추가되어 있습니다.

## 📞 연락처

- **이름**: 임주영
- **직업**: Freelance Trainer
- **전화**: 010-8552-6195
- **이메일**: ljy_1130@naver.com
- **인스타그램**: [@Wings_physique00](https://www.instagram.com/Wings_physique00)

## 🏆 수상 경력

- 24년 NPC/IFBB HDEX 내추럴 리저널 **1위**
- 24년 NPC/IFBB HDEX 내추럴 프로퀄리파이어 **7위**
- 25년 PCA 수원 **3위**
- 25년 NPC/IFBB 압도 오픈 리저널 **1위**
- 25년 NPC/IFBB 압도 오픈 프로퀄리파이어 **3위**

## 📄 라이센스

© 2025 임주영. All rights reserved.

---

**생성 정보**
- 생성일: 2025-11-11
- 기반 데이터: Google Spreadsheet
- 프레임워크: React + Vite + Tailwind CSS
