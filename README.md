[Feature #2] 메인페이지 구현

### 요구 사항

1. 유저가 페이지를 처음 열었을 때 “/main”에 도착하도록 만들어주세요
   - main에는 여행 상품 정보 (mock JSON) 를 활용하여 여행 상품 정보를 노출해야합니다.
     - 리스트에서 노출해야 하는 정보: `idx, name, mainImage, price, spaceCategory`
   - 예약 버튼을 달아 예약 버튼을 클릭시 여행 상품 장바구니에서 사용 할 수 있도록 상품 데이터
     를 저장해주세요.
   - 여행 상품 정보를 클릭했을 때 여행 상품을 자세히 볼 수 있는 모달창을 제작해주세요
     - 모달에서 노출해야 하는 정보: `idx, name, mainImage, description, spaceCategory, price, maximumPurchases, registrationDate`

### 사용 라이브러리

- reac-router-dom
- axios
- react-query

### 구현

[ ] 라우터 구현(/main, /reservations)
[ ] 컴포넌트 구조 설계 (메인페이지에 대한)
[ ] 여행 상품 정보 노출

### 테스트

[ ]

---

## 발견한 문제

1. `React must be in scope when using JSX`

   1. React 17.0 버전 이전에는 파일 내에 `import React from 'react'` 를 작성해야 했다.
   2. 컴포넌트를 만들 때 React.createElement 함수를 호출해서 만드는데, 해당 파일 내에 react가 import 하지 않으면 오류가 발생한다.
   3. 하지만 17.0 버전 이후에는 더 이항 가져오기를 추가할 필요가 없어졌다. JSX를 컴파일할 때 가져오는 것을 자체적으로 추가했기 때문.
   4. 그래서 해당 버전 이후로는 Eslint에서 해당 규칙을 비활성화하여 사용할 수 있다.

   ```
   "react/jsx-uses-react": "off",
   "react/react-in-jsx-scope": "off"
   ```

   [관련글](https://dev.to/chandelieraxel/why-do-react-need-to-be-in-scope-for-jsx-3hen)
