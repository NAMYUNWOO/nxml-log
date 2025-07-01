# NXML LOG

동호회 정기모임 활동 기록 어플리케이션

## 프로젝트 소개

NXML LOG는 동호회의 정기모임 활동을 체계적으로 기록하고 관리할 수 있는 웹 애플리케이션입니다. 모임 일정, 참석자, 활동 내용 등을 간편하게 기록하고 조회할 수 있습니다.

## 기술 스택

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Runtime**: [React 19](https://react.dev/)

## 시작하기

### 필수 요구사항

- Node.js 18.17 이상
- npm 또는 yarn

### 설치

```bash
# 저장소 클론
git clone https://github.com/NAMYUNWOO/nxml-log.git
cd nxml-log

# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

## 사용 가능한 스크립트

```bash
npm run dev      # 개발 서버 시작
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 시작
npm run lint     # 코드 린트 검사
```

## 프로젝트 구조

```
nxml-log/
├── app/              # Next.js App Router 페이지와 레이아웃
│   ├── layout.tsx    # 루트 레이아웃
│   ├── page.tsx      # 홈 페이지
│   └── globals.css   # 전역 스타일
├── public/           # 정적 파일
├── package.json      # 프로젝트 메타데이터 및 의존성
├── tsconfig.json     # TypeScript 설정
├── tailwind.config.js # Tailwind CSS 설정
└── next.config.js    # Next.js 설정
```

## 주요 기능 (개발 예정)

- [ ] 모임 일정 관리
- [ ] 참석자 명단 관리
- [ ] 활동 내용 기록
- [ ] 사진 업로드
- [ ] 모임 통계 조회
- [ ] 회원 관리

## 기여하기

프로젝트에 기여하고 싶으시다면 다음 단계를 따라주세요:

1. 프로젝트를 Fork 합니다
2. 새로운 브랜치를 생성합니다 (`git checkout -b feature/AmazingFeature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/AmazingFeature`)
5. Pull Request를 생성합니다

## 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 연락처

프로젝트 관련 문의사항이 있으시면 이슈를 생성해 주세요.