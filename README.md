# 원티드 프리온보딩 FE 인턴십 2주차 과제

원티드 프리온보딩 FE 인턴십 2주차 과제물 입니다.

‘라이크어로컬’ 브랜드의 기업 과제를 진행하였습니다.

작업 기간 : 3/7 ~ 3/10 (4일간 진행)

## 🌟Preview

<table>
    <tr>
        <td>메인 페이지</td>
        <td>장바구니 페이지</td>
    </tr>
    <tr>
        <td>이미지</td>
        <td>이미지</td>
    </tr>
</table>

## 📝Contents

### 배포링크

### 프로젝트 실행 방법

```tsx
$ git clone https://github.com/wanted-onboarding-10team/pre-onboarding-9th-2-10.git
$ npm i
$ npm start
```

### 사용 기술 스택

<div display=flex >
<!--React-->
<img alt="React" src ="https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=black"/>
<!--React Router-->
<img alt="React Router" src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"/>
<!--Typescript-->
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white" />
<!--Axios-->
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white" />
<!-- Chakra UI -->
<img src="https://img.shields.io/badge/Chakra UI-319795?style=for-the-badge&logo=ChakraUI&logoColor=white" />
</div>

- **코드컨벤션**

<div display=flex>
<!--eslint-->
<img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=white" />
<!--prettier-->
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=white" />
<!--husky -->
<img src="https://img.shields.io/badge/HUSKY-000000?style=for-the-badge&logo=&logoColor=white" />
</div>

- **협업툴**

<div display=flex>
<!-- GitHub -->
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white" />
<!-- Notion -->
<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white" />
<!-- Figma -->
<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white" />
</div>

### 파일 구조

```
📦
├─ public
│     └─ data
│         └─ mock_data.json
├─ src
│  ├─ components
│  │  ├─ context
│  │  │   └─ BasketProvider.tsx
│  │  ├─ modal
│  │  │   └─ TravelDetailModal.tsx
│  │  ├─ FilterContainer.tsx
│  │  ├─ MainLayout.tsx
│  │  ├─ NavBar.tsx
│  │  ├─ ReservationItem.tsx
│  │  └─ TravelContent.tsx
│  ├─ constant
│  │  └─ index.ts
│  ├─ pages
│  │  └─ ReservationPage.tsx
│  │  └─ Root.tsx
│  │  └─ TravelListPage.tsx
│  ├─ router
│  │  ├─ loader
│  │  │   ├─ mainLoader.ts
│  │  │   └─ rootLoader.ts
│  │  └─ index.tsx
│  ├─ types
│  ├─ utils/api
│  ├─ index.js
└─ └─ App.js

```

### ✅ Team Rules

### 1. 커밋 컨벤션

| Type     | Description                                                                        |
| -------- | ---------------------------------------------------------------------------------- |
| Feat     | 새로운 기능 추가                                                                   |
| Fix      | 버그 수정                                                                          |
| Design   | CSS 등 UI 디자인 변경                                                              |
| Refactor | 코드 리팩토링                                                                      |
| Docs     | 문서 작업, 수정                                                                    |
| Style    | 코드 스타일 및 포맷 변경(코드 자체의 변경은 없는 경우, 함수/ 변수명 변경 포함)     |
| Chore    | 소스 코드를 건들지 않는 작업 - 빌드 테스트 업데이트, 패키지 매니저를 설정하는 경우 |
| Rename   | 파일 혹은 폴더명을 수정하거나 옮기는 작업만 수행                                   |
| Remove   | 파일을 삭제하는 작업만 수행                                                        |

### 2. Git Flow

```HTML
- main : 배포 브랜치
- develop : 개발 브랜치
- feature/#1 : 각 기능을 개발하는 브랜치
	- feature/#1-팀원이름
- feature/#2
	- feature/#2-팀원이름
- feature/#3
	- feature/#3-팀원이름
- feature/#4
	- feature/#4-팀원이름
```

### 3. Prettier

```javascript
module.exports = {
  printWidth: 100,
  singleQuote: true,
  arrowParens: 'avoid',
  semi: true,
  tabWidth: 2,
  endOfLine: 'auto',
  trailingComma: 'all',
  useTabs: false,
  bracketSpacing: true,
  jsxSingleQuote: true,
};
```

### 4. EsLint

```javascript
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    'no-var': 'error', // var 금지
    'no-multiple-empty-lines': 'error', // 여러 줄 공백 금지
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }], // console.log() 금지
    eqeqeq: 'error', // 일치 연산자 사용 필수
    'dot-notation': 'error', // 가능하다면 dot notation 사용
    'no-unused-vars': 'warn', // 사용하지 않는 변수 금지
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
```

### 👏 협업 방법

주된 커뮤니케이션 툴로 [팀 노션 페이지](https://www.notion.so/a8743bf04f1344feb15205c33c4a3f87)와 Discord, [Figma](https://www.figma.com/file/GGEzHR7EmWW0FETY6eCy9Y/Week3-Project-%3A-%EB%9D%BC%EC%9D%B4%ED%81%AC%EC%96%B4%EB%A1%9C%EC%BB%AC---figjam?node-id=0%3A1&t=IkeA2nJKhdHAKsHT-0)를 사용했습니다.

1. 기능별로 팀원 개개인의 코드 리뷰

2. 토론을 통해 Best Practice 선정

- **노션 페이지 / Figma**

  - 회의를 통해 팀원들의 코드를 분석하고, 그 중에서 Best Practice 정하고,

    commit message convention, git flow 전략 등 Team Rules를 정하기 위해 활용

- **Discord**
  - 팀원들의 의사소통 및 화면 공유를 통한 협업을 위해 활용

### 🌟 프로젝트 진행 과정

Issue와 Mileston, PR을 통해 코드 리뷰를 진행하며 프로젝트를 진행하였습니다.

Issue를 정의하고 하루에 한가지의 이슈를 다같이 진행한 후 피드백하는 식으로 동료 협업을 진행하였습니다.

## [Issue](https://github.com/wanted-onboarding-10team/pre-onboarding-9th-2-10/milestone/1)

| 날짜 | 제목                                                                                                      |
| ---- | --------------------------------------------------------------------------------------------------------- |
| 3/7  | [#1 개발환경 세팅 ](https://github.com/wanted-onboarding-10team/pre-onboarding-9th-2-10/issues/1)         |
| 3/8  | [#2 main page 기능 구현](https://github.com/wanted-onboarding-10team/pre-onboarding-9th-2-10/issues/2)    |
| 3/9  | [#4 reservations 기능 구현](https://github.com/wanted-onboarding-10team/pre-onboarding-9th-2-10/issues/4) |
| 3/10 | [#3 filter 기능 구현](https://github.com/wanted-onboarding-10team/pre-onboarding-9th-2-10/issues/3)       |
|      | [#25 style 수정 ](https://github.com/wanted-onboarding-10team/pre-onboarding-9th-2-10/issues/25)          |
|      | [#24 refactoring](https://github.com/wanted-onboarding-10team/pre-onboarding-9th-2-10/issues/24)          |

### 주요 논점

- **Redux vs Context API**

  **장바구니 기능 중 예약을 한 상품이 새로고침을 할 때, 그대로 남아있어야할 것 같다는 의견**

  둘 다 다른 목적을 가지고 있는 도구지만 컴포넌트에서 복잡한 상태 관리가 필요한 경우 사용한다.

  Redux는 보통 여러 컴포넌트에 많은 양의 상태를 관리하기 위해 사용되지만 지금 우리가 하고 있는 프로젝트는 많은 양의 상태를 관리하지 않는다(장바구니 기능에 한정적으로 사용함).
  또한, `props drilling` 문제를 해결하기 위한 것이므로, `Context API`로 결정

- **상품의 남은 수량 계산 방식**

  - **localStorge에 담긴 배열의 길이 vs property 추가**

    배열의 길이로 체크하는 방식은 데이터를 중복으로 담아 계산하는 방식이었으며,
    프로퍼티에 추가하는 방식은 상품에 대한 수량을 직접적으로 담고 있어 명확하게 그 속성을 알 수 있어 property 결정

- **필터 작동방식 및 디자인**

  - **silder vs input vs checkbox**

    이미 정해져 있는 구간을 클릭 하는 것은 사용자 입장에서 원하는 값이 없을 경우도 있기 때문에

    쉽고 편하게 사용할 수 있는 `silder` 와 `input` 으로 결정

  - **실시간 렌더 vs 검색 버튼**

    실시간 렌더는 바로바로 보이는 장점이 있지만 필터를 누를 때마다 렌더링 다시하기 때문에 성능상 좋지 않다고 판단 하여

    사용자가 원하는 필터를 클릭, silde를 하고 `검색버튼`을 눌러야 원하는 결과값이 나오도록 하기로 결정

### 참여 멤버

|                                박수완                                |                                  유시온                                  |                                 이새미                                  |                                한동룡                                 |                                 홍수민                                 |                               황서영                                |
| :------------------------------------------------------------------: | :----------------------------------------------------------------------: | :---------------------------------------------------------------------: | :-------------------------------------------------------------------: | :--------------------------------------------------------------------: | :-----------------------------------------------------------------: |
|                [@skdoqj ](https://github.com/skdoqj)                 |               [@yoosion030](https://github.com/yoosion030)               |               [@shinpanda](https://github.com/shinpanda)                |                [@Ryong-E](https://github.com/Ryong-E)                 |                [@hongsoom](https://github.com/hongsoom)                |                 [@Seo0H](https://github.com/Seo0H)                  |
| <img src="https://avatars.githubusercontent.com/skdoqj" width="100"> | <img src="https://avatars.githubusercontent.com/yoosion030" width="100"> | <img src="https://avatars.githubusercontent.com/shinpanda" width="100"> | <img src="https://avatars.githubusercontent.com/Ryong-E" width="100"> | <img src="https://avatars.githubusercontent.com/hongsoom" width="100"> | <img src="https://avatars.githubusercontent.com/Seo0H" width="100"> |
