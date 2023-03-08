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

[x] 라우터 구현(/main, /reservations)
[x] 컴포넌트 구조 설계 (메인페이지에 대한)
[x] 여행 상품 정보 노출

---

## issue

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

모달창 구현을 메인 페이지에서 할 것인지, Card 컴포넌트에서 할 것인지 고민
MainPage에서 모달창 관련 훅을 사용한다고 해도, 전체가 다시 그려지는 것이기 때문에,
결국 자식 컴포넌트들도 다시 그려진다 생각이 들어 Card에서 모달창을 열도록 우선 개발함.

2. 장바구니 아이템 Redux toolkit 사용하여 관리
   Redux toolkit 사용 이유
   -> 예약한 상품을 main에서도, reservedPage 에서도 사용할 것이고,
   예약을 하는 컴포넌트와 보여주는 컴포넌트가 분리되어 있으므로 전역으로 사용하기 위해 redux toolkit 을 사용함
