## 리액트 스타일링 정복

모듈이 타언어로 되어 있어도 사용할 수 있게해줌

window환경에서 안될경우

```
npm install --global --production windows-build-tools
```

<br>

import하면 번들에서 용량이 커준다는 문제가 있음

```react
npx create-react-app style-loaders-example
cd style-loaders-example
npm run eject

npm i node-sass
```



```react
import "./App.css"; //1.module.css가 아니면서 css인것 
import "./App.module.css"; //2.
import "./App.scss"; //3.
import "./App.module.scss"; //4.
```

1의 단점(중복됨 스코프 문제) -> 겹치지 않기 위해 규칙 필요



### createGlobalStyle

컴포넌트 단위당 css를 적용하게 되는데 반대로 전체에 css를 적용할때





<br>

shadow = 별도의 공간이라는 개념으로 받아들이면서 시작

```
npm i react-shadow
```

