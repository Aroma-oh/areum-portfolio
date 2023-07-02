// firebase db로 이동 예정

export const PROJECT_NAV = [
  { type: 'Solo', name: '포트폴리오', create: '2023.07', period: 8 },
  { type: 'Team', name: '쓰쓰또쓰', create: '2023.05', period: 28 },
  { type: 'Solo', name: 'To Do', create: '2023.03', period: 20 },
]

export const PROJECTS = [
  {
    nav: { type: 'Solo', name: '포트폴리오', create: '2023.07', period: 8 },
    intro: [
      { title: '프로젝트 소개', content: ['프론트엔드 취업을 위한 프로젝트입니다. 노션을 이용한 포트폴리오 페이지에서 링크 트리의 불편함을 느껴, 한 페이지에서 편리한 정보 조회가 가능한 포트폴리오 웹을 개발했습니다. 편리하고 효율적인 정보 탐색을 제공하기 위해 클릭을 이용한 스크롤 이동을 주요 기능으로 개발하였습니다.', '프론트엔드 개발자로써의 역량을 보여드리기 위해 사용할 수 있는 모든 스택을 적용시킨 프로젝트입니다. 이전 Next.js 개발에서 아쉬움으로 남았던 SSR을 적용시키기 위해 서버와의 통신을 추가하기도 했습니다. '] },
      { title: '후기 & 교훈', content: ['역량을 증명하기 위해 타이트한 개발기간과 그럼에도 깔끔한 코드 작성에 초점을 맞추어 개발했습니다. 처음으로 타이트한 일정 내에서 개발을 진행하며 개발 전략과 순서의 중요성을 경험할 수 있었습니다.', '아쉬웠던 점과 이후의 태도 추가 예정'] }
    ],
    info: [
      { title: '배포 링크', href: '준비중' },
      { title: '리포지토리', href: 'https://github.com/Aroma-oh/areum-portfolio' },
      { title: '구현 기능', content: '반응형 웹, SEO, 이미지 스프라이트, 스크롤 이동, 간편 이메일, 프로그레스바, 캐러셀, 가로/세로 모드, CI/CD' },
      { title: '기술 스택', content: 'Next.js, TypeScript, Recoil, React-query, Axios, Styled-Component, MUI' }
    ],
    image: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-da410.appspot.com/o/react.png?alt=media&token=c2fe14a0-81f6-4add-8fea-ebdd27958db1',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-da410.appspot.com/o/react.png?alt=media&token=c2fe14a0-81f6-4add-8fea-ebdd27958db1',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-da410.appspot.com/o/react.png?alt=media&token=c2fe14a0-81f6-4add-8fea-ebdd27958db1',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-da410.appspot.com/o/react.png?alt=media&token=c2fe14a0-81f6-4add-8fea-ebdd27958db1',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-da410.appspot.com/o/react.png?alt=media&token=c2fe14a0-81f6-4add-8fea-ebdd27958db1',
    ],
  },
  {
    nav: { type: 'Team', name: '쓰쓰또쓰', create: '2023.05', period: 28 },
    intro: [
      { title: '프로젝트 소개', content: ['쓰쓰또쓰는 “쓰고 쓰고 또 쓰자”의 줄임말로, 개인의 플라스틱 재사용을 통해 환경문제의 개선을 제안하는 프로젝트입니다.', '재사용 과정을 공유하는 커뮤니티가 개인의 플라스틱 재사용 동력이 되는 만큼 커뮤니티의 활성화를 주안점으로 두고 개발을 진행했습니다.', '사용자의 쉽고 빠른 재사용 기록과 공유를 위해 모바일 환경을 타겟으로 개발하였으며, 빠른 정보 탐색을 위한 무한 스크롤과 필터링을 구현하였습니다. 또한 ‘플라스틱 재활용’ 등의 키워드 검색을 서비스 유입으로 연결시키기 위해 Next.js를 사용했습니다.'] },
      { title: '후기 & 교훈', content: ['인터렉션을 트리거로 데이터 통신을 경험한 프로젝트입니다. 화면 기능을 정의하고 필요한 데이터를 백엔드와 논의하며 불필요한 서버 통신을 줄이는 과정을 경험했습니다. 또한 백엔드와의 협업을 통해 API를 정의하고, API 요청 시점을 고민할 수 있었습니다.', '아쉬웠던 점은 Next.js와 TypeScript를 도전적 과제로 설정하여 프로젝트에 적용하였으나, 적용이 미숙했던 점입니다. Next.js를 사용한 주요 목적인 SSR이 서비스에 적용되지 않은 점을 뒤늦게 발견하여 특히나 아쉬움을 느꼈습니다. Next.js를 다시 사용하게 된다면 SSR과 SSG를 주안점으로 두고 개발하고 싶습니다.'] }
    ],
    info: [
      { title: '배포 링크', href: 'ssdss.vercel.app/' },
      { title: '리포지토리', href: 'https://github.com/Aroma-oh/recycling-community-projects' },
      { title: '구현 기능', content: '반응형 웹, 무한스크롤, 캐러셀, CRUD(댓글, 북마크, 팔로우, 투표' },
      { title: '기술 스택', content: 'Next.js, TypeScript, Recoil, React-query, Axios, Styled-Component, MUI' }
    ],
    image: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-da410.appspot.com/o/react.png?alt=media&token=c2fe14a0-81f6-4add-8fea-ebdd27958db1',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-da410.appspot.com/o/react.png?alt=media&token=c2fe14a0-81f6-4add-8fea-ebdd27958db1',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-da410.appspot.com/o/react.png?alt=media&token=c2fe14a0-81f6-4add-8fea-ebdd27958db1',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-da410.appspot.com/o/react.png?alt=media&token=c2fe14a0-81f6-4add-8fea-ebdd27958db1',
    ],
  },
  {
    nav: { type: 'Solo', name: 'To Do', create: '2023.03', period: 20 },
    intro: [
      { title: '프로젝트 소개', content: ['부트캠프의 단편적인 요구사항만 해결하는 과제를 수행하며, 개인의 성장에 의구심을 느껴 진행한 프로젝트입니다. 요구사항 및 기능정의 부터  구현까지  스스로 진행하는 것을 목표로 프로젝트를 진행하였습니다.', '노션으로 프로젝트를 관리하며 사용자 요구사항 및 기능을 정의하였습니다. 또한 피그마로 디자인 프로토타입을 구현하며 UX 향상을 고민하였습니다.'] },
      { title: '후기 & 교훈', content: ['전역 상태관리를 적용하기 전에 Props drilling을 경험하며 더 나은 프로젝트 구조에 대해 고민할 수 있었습니다.  Redux-toolkit으로 리팩토링을 진행하며 예측 가능한 상태관리를 지원하는 Flux 패턴의 이점을 경험할 수 있었습니다.', '학습한 기술 스택을 실제 프로젝트에 적용시키며 개발 환경에서 발생하는 문제를 직면하고, 해결에 대한 고민을할 수 있어서 좋은 경험이었습니다. '] }
    ],
    info: [
      { title: '배포 링크', href: '준비중' },
      { title: '리포지토리', href: 'https://github.com/Aroma-oh/todo-service-version2' },
      { title: '구현 기능', content: 'To Do CRUD, 필터링, 다크모드, 캘린더' },
      { title: '기술 스택', content: 'React, Redux-toolkit, Styled-Component' }
    ],
    image: [
      'https://firebasestorage.googleapis.com/v0/b/portfolio-da410.appspot.com/o/react.png?alt=media&token=c2fe14a0-81f6-4add-8fea-ebdd27958db1',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-da410.appspot.com/o/react.png?alt=media&token=c2fe14a0-81f6-4add-8fea-ebdd27958db1',
      'https://firebasestorage.googleapis.com/v0/b/portfolio-da410.appspot.com/o/react.png?alt=media&token=c2fe14a0-81f6-4add-8fea-ebdd27958db1',
    ],
  },
];

