# React Portfolio Website [🍀바로가기](https://hayohio-bit.github.io/hayohio-portfolio/)

![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF?style=flat-square&logo=vite&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white)

> React 기반 인터랙티브 포트폴리오 웹사이트 프로젝트

---

## 📝 프로젝트 개요

- **프로젝트 이름**: Creative Archive (크리에이티브 아카이브)
- **한 줄 소개**: React로 구현한 개인 포트폴리오 카탈로그 웹사이트
- **개발 기간**: 2025-12-15(월) ~ 2025-12-19(금)
- **발표일**: 2025-12-22(월)
- **주요 목적**
  - React 컴포넌트 설계 및 상태 관리 실습
  - 카탈로그형 UI 패턴 구현 (홈 목록 → 상세 페이지)
  - 실제 포트폴리오로 활용 가능한 결과물 제작
  - 필터/정렬, 반응형 레이아웃, 이미지 갤러리 구현 경험

---

## 🎯 주요 기능

- ✅ **홈 페이지**: 디자인물 카드 그리드 레이아웃 (썸네일 + 제목 + 카테고리 태그)
- ✅ **작업물 카테고리 분류**: 뉴스레터 / 브로슈어 / 인포그래픽 / 포스터 등 카테고리별 필터링
- ✅ **검색 기능**: 제목·설명 기반 키워드 검색
- ✅ **정렬**: 최신순 / 오래된 순 / 제목순
- ✅ **상세 페이지**: 큰 이미지 갤러리 + 프로젝트 설명 + 제작 일자·사용 도구 정보
- ✅ **반응형 디자인**: 모바일 / 태블릿 / 데스크톱 완전 대응
- ✅ **테마 관리**: Light/Dark 모드 토글 및 테마 지속성
- ✅ **Redux 상태 관리**: 포트폴리오 전역 상태 관리

---

## 🔧 기술 스택

### Frontend
- **React 18** (Vite)
- **React Router v6** (SPA 라우팅)
- **Redux Toolkit** (전역 상태 관리)
- **React Hooks** (`useState`, `useEffect`, `useContext`, `useMemo`, `useCallback`)
- **CSS Modules / CSS-in-JS** (스타일링)

### 상태 관리
- Redux Toolkit (포트폴리오 데이터)
- Context API (테마 관리)
- Custom Hooks (비즈니스 로직)

### 개발 도구
- **Vite** (빌드 도구)
- **Git / GitHub** (버전 관리)
- **ESLint / Prettier** (코드 품질 관리)
- **JSON** (포트폴리오 데이터 저장)

### 배포
- GitHub Pages

---

## 📂 프로젝트 구조

```
hayohio-portfolio/
├── index.html
├── public/
│   ├── assets/
│   │   └── images/                    # 포트폴리오 이미지
│   │       └── [프로젝트 이미지들]
│   └── images/
│       └── [공통 이미지]
│
├── src/
│   ├── App.jsx                        # 루트 컴포넌트
│   ├── main.jsx                       # 애플리케이션 진입점
│   ├── index.css                      # 전역 스타일
│   │
│   ├── assets/
│   │   └── images/                    # 포트폴리오 이미지 (src 버전)
│   │
│   ├── components/                    # 재사용 가능한 컴포넌트들
│   │   ├── layout/
│   │   │   ├── Header.jsx             # 네비게이션 헤더
│   │   │   ├── Header.css
│   │   │   ├── Footer.jsx             # 푸터 컴포넌트
│   │   │   ├── Footer.css
│   │   │   └── MainLayout.jsx         # 메인 레이아웃 래퍼
│   │   │
│   │   ├── portfolio/                 # 포트폴리오 관련 컴포넌트
│   │   │   ├── PortfolioCard.jsx      # 개별 작업물 카드
│   │   │   ├── PortfolioCard.css
│   │   │   ├── PortfolioList.jsx      # 작업물 목록
│   │   │   ├── PortfolioList.css
│   │   │   └── WorkSection/
│   │   │       ├── WorkSection.jsx    # 작업물 섹션
│   │   │       └── WorkSection.css
│   │   │
│   │   └── ui/                        # UI 유틸리티 컴포넌트
│   │       ├── ScrollButtons.jsx      # 스크롤 버튼
│   │       ├── ScrollButtons.css
│   │       └── ScrollToTop.jsx        # 맨 위로 스크롤
│   │
│   ├── pages/                         # 페이지 컴포넌트 (라우팅)
│   │   ├── Home/
│   │   │   ├── Home.jsx               # 홈 페이지
│   │   │   ├── Home.css
│   │   │   └── components/
│   │   │       ├── Hero.jsx           # 히어로 섹션
│   │   │       ├── Hero.css
│   │   │       ├── HeroPlanet.jsx     # 행성 애니메이션
│   │   │       └── HeroPlanet.css
│   │   │
│   │   ├── Work.jsx                   # 작업물 목록 페이지
│   │   ├── Work.css
│   │   │
│   │   ├── Detail/
│   │   │   ├── Detail.jsx             # 작업물 상세 페이지
│   │   │   └── Detail.css
│   │   │
│   │   ├── About.jsx                  # 소개 페이지
│   │   ├── About.css
│   │   │
│   │   ├── Contact.jsx                # 연락처 페이지
│   │   ├── Contact.css
│   │   │
│   │   └── NotFound/
│   │       ├── NotFound.jsx           # 404 페이지
│   │       └── NotFound.css
│   │
│   ├── routes/
│   │   └── AppRouter.jsx              # React Router 설정
│   │
│   ├── store/                         # Redux 상태 관리
│   │   ├── store.js                   # Redux 스토어 설정
│   │   └── slices/
│   │       └── portfolioSlice.js      # 포트폴리오 상태 슬라이스
│   │
│   ├── theme/                         # 테마 관리
│   │   ├── ThemeContext.jsx           # 테마 Context
│   │   ├── useTheme.js                # 테마 Hook
│   │   ├── getInitialTheme.js         # 초기 테마 설정
│   │   └── index.js
│   │
│   ├── data/                          # 데이터
│   │   ├── portfolioData.json         # 포트폴리오 JSON 데이터
│   │   └── projectUtils.js            # 데이터 유틸리티 함수
│   │
│   ├── hooks/                         # Custom React Hooks
│   │
│   └── utils/                         # 유틸리티 함수
│
├── package.json
├── vite.config.js                     # Vite 설정
└── README.md
```

---

## 🗂️ 데이터 구조 (`portfolioData.json`)

```json
[
  {
    "id": 1,
    "title": "2024년 12월 사내 뉴스레터",
    "category": "newsletter",
    "date": "2024-12-01",
    "thumbnail": "/assets/images/newsletters/2024-12-thumb.jpg",
    "images": [
      "/assets/images/newsletters/2024-12-01.jpg",
      "/assets/images/newsletters/2024-12-02.jpg"
    ],
    "description": "연말 회고 및 신년 계획을 담은 사내 뉴스레터입니다.",
    "tools": ["Adobe InDesign", "Photoshop"],
    "tags": ["내부 커뮤니케이션", "회고", "연말"]
  },
  {
    "id": 2,
    "title": "제품 소개 브로슈어",
    "category": "brochure",
    "date": "2024-09-15",
    "thumbnail": "/assets/images/brochures/product-brochure-thumb.jpg",
    "images": ["/assets/images/brochures/product-brochure-01.jpg"],
    "description": "신제품 런칭을 위한 A4 3단 접지 브로슈어입니다.",
    "tools": ["Illustrator"],
    "tags": ["제품", "마케팅"]
  }
]
```

---

## 📐 라우팅 구조 & 페이지

| 경로                 | 페이지         | 설명                                     |
|----------------------|----------------|---------------------------------------------|
| `/`                  | Home           | 메인 페이지 (히어로 섹션 + 포트폴리오 미리보기)   |
| `/work`              | Work           | 모든 작업물 목록 (필터·검색·정렬)                |
| `/work/:id`          | Detail         | 작업물 상세 페이지 (큰 이미지 갤러리)             |
| `/about`             | About          | 자기소개 페이지                                |
| `/contact`           | Contact        | 연락처/문의 페이지                              |
| `*`                  | NotFound       | 404 페이지                                   |

---

## 🧩 핵심 컴포넌트 설명

### 레이아웃 컴포넌트 (`components/layout/`)

#### **Header.jsx**
네비게이션 기능을 담당하는 헤더 컴포넌트입니다.
- 로고 및 사이트 이름
- 네비게이션 링크 (Home, Work, About, Contact)
- 테마 토글 버튼 (Light/Dark 모드)
- 모바일 반응형 메뉴

```jsx
import { useTheme } from '@/theme/useTheme';
import { Link } from 'react-router-dom';

function Header() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className="header">
      {/* 네비게이션 콘텐츠 */}
      <button onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </header>
  );
}
```

#### **Footer.jsx**
페이지 하단 푸터 컴포넌트입니다.
- GitHub, LinkedIn, Email 링크
- Copyright 정보
- 소셜 아이콘

#### **MainLayout.jsx**
전체 페이지를 감싸는 레이아웃 래퍼입니다.
- Header와 Footer 포함
- 일관된 페이지 구조 유지

### 포트폴리오 컴포넌트 (`components/portfolio/`)

#### **PortfolioCard.jsx**
개별 작업물을 표시하는 카드 컴포넌트입니다.
- 썸네일 이미지
- 제목 및 카테고리 태그
- 호버 효과 (확대, 그림자)
- 클릭 시 상세 페이지로 이동

```jsx
function PortfolioCard({ work }) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/work/${work.id}`);
  };
  
  return (
    <div className="card" onClick={handleClick}>
      <img src={work.thumbnail} alt={work.title} />
      <div className="card-info">
        <h3>{work.title}</h3>
        <span className="category">{work.category}</span>
      </div>
    </div>
  );
}
```

#### **PortfolioList.jsx**
필터링된 작업물들을 그리드로 표시합니다.
- Redux 스토어에서 데이터 가져오기
- CSS Grid를 이용한 반응형 레이아웃
- 검색, 필터, 정렬 적용

#### **WorkSection.jsx**
홈 페이지에서 포트폴리오 작업물을 보여주는 섹션입니다.
- 일부 추천 작업물만 표시
- "모두 보기" 버튼으로 Work 페이지 이동

### 페이지 컴포넌트 (`pages/`)

#### **Home.jsx**
웹사이트의 메인 페이지입니다.
- Hero 섹션 (인사말 + 행성 애니메이션)
- 포트폴리오 작업물 미리보기
- CTA (Call To Action) 버튼

#### **Work.jsx**
모든 작업물을 나열하는 페이지입니다.
- 카테고리별 필터 버튼
- 실시간 검색
- 정렬 옵션 (최신순, 오래된 순, 제목순)
- PortfolioList 컴포넌트로 그리드 표시

```jsx
function Work() {
  const dispatch = useDispatch();
  const { items, filters } = useSelector(state => state.portfolio);
  
  useEffect(() => {
    // 데이터 로딩
    dispatch(loadPortfolios());
  }, [dispatch]);
  
  // 필터 적용
  const filtered = items.filter(item => 
    filters.category === 'all' || item.category === filters.category
  );
  
  return (
    <div className="work-page">
      <FilterBar />
      <PortfolioList items={filtered} />
    </div>
  );
}
```

#### **Detail.jsx**
개별 작업물의 상세 페이지입니다.
- 큰 이미지 갤러리 (화살표로 네비게이션)
- 작업물 정보 (제목, 설명, 사용 도구, 태그)
- 이전/다음 작업물 네비게이션

---

## 🎨 디자인 가이드

### 색상 팔레트

```css
/* Light Mode */
--bg-primary: #ffffff;
--bg-secondary: #f5f5f5;
--text-primary: #333333;
--text-secondary: #666666;
--accent: #ff6b6b;

/* Dark Mode */
--bg-primary: #1a1a1a;
--bg-secondary: #2d2d2d;
--text-primary: #ffffff;
--text-secondary: #b0b0b0;
--accent: #ff8787;
```

### 타이포그래피

- **제목**: 'Montserrat', sans-serif (굵기: 600-700)
- **본문**: 'Noto Sans KR', sans-serif (굵기: 400-500)
- **코드**: 'Fira Code', monospace

### 반응형 브레이크포인트

```css
/* Mobile */
@media (max-width: 576px) {
  /* 1열 그리드, 작은 패딩 */
}

/* Tablet */
@media (768px <= width < 1024px) {
  /* 2열 그리드 */
}

/* Desktop */
@media (width >= 1024px) {
  /* 3-4열 그리드 */
}
```

---

## 📚 핵심 학습 포인트

### React 개념

1. **함수형 컴포넌트와 Hooks**: React 18의 최신 패턴 사용
2. **상태 관리**: Redux Toolkit으로 전역 상태 관리
3. **라우팅**: React Router v6로 SPA 구현
4. **Context API**: 테마 전환 등 전역 설정 관리
5. **Custom Hooks**: 비즈니스 로직을 Hook으로 분리
6. **조건부 렌더링**: 필터, 검색에 따른 동적 표시
7. **리스트 렌더링**: key prop의 올바른 사용

### React 규칙

- **순수 함수**: 동일한 입력에 항상 동일한 출력
- **Hook 규칙**: 최상위 레벨에서만 호출
- **렌더링 최적화**: `useMemo`, `useCallback` 활용
- **의존성 배열**: `useEffect` 의존성 명시

### 성능 최적화

- 이미지 lazy loading
- 컴포넌트 메모이제이션 (`React.memo`)
- 번들 크기 최적화 (Code Splitting)
- CSS-in-JS 최적화

---

## 📅 개발 일정

| 날짜           | 작업 내용                             |
| ------------ | --------------------------------- |
| **12/15(월)** | 프로젝트 초기 설정, 폴더 구조 설계              |
| **12/16(화)** | 공통 컴포넌트 개발 (Header, Footer, Card) |
| **12/17(수)** | 홈 페이지 구현 (필터, 검색, 정렬 기능)          |
| **12/18(목)** | 상세 페이지 구현 (이미지 갤러리, 정보 표시)        |
| **12/19(금)** | 반응형 디자인, 테마 관리, 버그 수정             |
| **12/22(월)** | **프로젝트 발표**                       |

---

## 📞 문의 및 연락

- **GitHub**: [@hayohio-bit](https://github.com/hayohio-bit)
- **Email**: [hayohio@gmail.com](mailto:hayohio@gmail.com)
- **포트폴리오**: [Live Demo URL](https://hayohio-bit.github.io/hayohio-portfolio/)

---

## 📄 라이선스

MIT License

Copyright (c) 2025 hayohio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions.

---

## 🙏 감사의 말

이 프로젝트는 React 학습 및 현업 포트폴리오 제작을 목적으로 개발되었습니다.

**마지막 업데이트**: 2025년 12월 22일