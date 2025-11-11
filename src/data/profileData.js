/**
 * 임주영 트레이너 포트폴리오 데이터
 *
 * 이 데이터는 Google 스프레드시트에서 추출된 실제 응답입니다.
 * 스프레드시트 URL: https://docs.google.com/spreadsheets/d/1QV5deQ0tb9FIzFkyWjSKcROJvASrk6OsyEeXKUCuucw/
 * 시트 ID: 1289156437
 * 최종 업데이트: 2025-11-11
 *
 * ⚠️ 주의: 모든 데이터는 실제 제공된 내용만 포함하며,
 * 과장되거나 허위 정보가 포함되지 않았습니다.
 */

const profileData = {
  // 메타 정보
  meta: {
    projectName: "임주영 포트폴리오",
    title: "임주영 - Freelance Trainer",
    author: "임주영",
    description: "헬스 트레이너 임주영의 포트폴리오",
  },

  // 개인 정보 (스프레드시트 "이름", "성별", "나이", "지역", "전화번호", "직업" 열)
  personalInfo: {
    name: "임주영",
    nameEn: "Lim Joo Young",
    gender: "Male",
    age: 26,
    location: "천안",
    phone: "010-8552-6195",
    profession: "Freelance Trainer",
  },

  // 디자인 설정 (스프레드시트 "디자인 스타일", "색상" 열)
  designPreferences: {
    style: "Simple/Minimal",
    colorTheme: "Black",
    responsive: true,
  },

  // 소개 문구 (스프레드시트 "기술/기능 요청" 열)
  introduction: {
    quote: "운동을 재밌고 쉽게 가르쳐 드리겠습니다. 개인적인 상황에 맞춘 맞춤형 프로그램을 제공하여, 지속적으로 성장할 수 있도록 지원할 것입니다.",
  },

  // 자격증 및 경력 (스프레드시트 "학력 사항 및 경력" 열)
qualifications: [
  "헬스 트레이너 1급",
  "생활체육 지도자 2급",
  "NPC 서울 HDEX 리저널 1위",
  "IFBB 프로 퀄리파이어 세컨콜 1위",
  "대한예방운동협회 재활·교정·예방 운동 전문가 자격",
  "대한예방운동협회 근막이완 테라피 수료",
  "대한건강운동관리협회 기능해부학 자격",
  "대한건강운동관리협회 웨이트 트레이닝 지도자 자격",
  "대한건강운동관리협회 글라스톤 테크닉 수료",
  "대한건강운동관리협회 스포츠 테이핑 수료",
  "천안 검찰청·법무부·정보통신진흥원 관공서 전담강사",
  "NPC HDEX 리저널 1등",
  "IPA 기초해부학 수료"
],

  // 수상 경력 (스프레드시트 "수상 경력" 열에서 체크되었으므로 포함)
  awards: [
    {
      id: 1,
      year: "2024",
      title: "24년 NPC/IFBB HDEX 내추럴 리저널 1위",
      rank: "1위",
      category: "내추럴 리저널",
    },
    {
      id: 2,
      year: "2024",
      title: "24년 NPC/IFBB HDEX 내추럴 프로퀄리파이어 7위",
      rank: "7위",
      category: "내추럴 프로퀄리파이어",
    },
    {
      id: 3,
      year: "2025",
      title: "25년 PCA 수원 3위",
      rank: "3위",
      category: "보디빌딩",
    },
    {
      id: 4,
      year: "2025",
      title: "25년 NPC/IFBB 압도 오픈 리저널 1위",
      rank: "1위",
      category: "오픈 리저널",
    },
    {
      id: 5,
      year: "2025",
      title: "25년 NPC/IFBB 압도 오픈 프로퀄리파이어 3위",
      rank: "3위",
      category: "오픈 프로퀄리파이어",
    },
  ],

  // 연락처 (스프레드시트 "인스타그램", "이메일" 열)
  contact: {
    instagram: "wings_classic00",
    instagramUrl: "https://www.instagram.com/wings_classic00",
    email: "ljy_1130@naver.com",
    phone: "010-8552-6195",
  },

  // 이미지 (다운로드된 로컬 파일 경로)
  // TODO: download_drive_images.py 스크립트를 실행하여 실제 이미지를 다운로드하세요
  images: {
    profilePhoto: "/limjooyoung-portfolio/images/profile.jpg",  // 실제: /images/profile.jpg
    awards: [
      "/images/placeholder.svg",  // 실제: /images/award_1.jpg
    ],
  },

  // 활성화된 섹션 (스프레드시트 "콘텐츠 자료 제공 여부" 열 기반)
  enabledSections: {
    about: true,           // 항상 활성화 (소개)
    qualifications: true,  // 학력 사항 및 경력 체크됨
    awards: true,          // 수상 경력 체크됨
    projects: false,       // 프로젝트/작품 경력 체크 안 됨
    contact: true,         // 항상 활성화 (연락처)
  },
};

export default profileData;
