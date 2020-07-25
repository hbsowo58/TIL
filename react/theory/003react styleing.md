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



<br>

antd

자동화

```
npm run eject
npm install babel-plugin-import --save-dev

//package.json
plugins 추가
```



<br>

# HOC *Higher Order Component*

*advanced technique in React for **reusing** component logic.*

***not** part of the React API*

*a **pattern** that emerges from React’s compositional nature.*

---

```react
HOC = function(컴포넌트) { return 새로운 컴포넌트; }
```

HOC는 <컴포넌트> 를 인자로 받아 <새로운 컴포넌트> 를 리턴하는 함수

---

connect(), Fragment Container, withRouter(),

---

### *사용하는 법*

- *Use HOCs For [**Cross-Cutting Concerns**](https://ko.wikipedia.org/wiki/횡단_관심사)*
- *Don’t Mutate the Original Component. Use Composition.*
- *Pass Unrelated Props Through to the Wrapped Component*
- *Maximizing Composability*
- *Wrap the Display Name for Easy Debugging*

---

종류

```react
// 1. withRouter
withRouter(컴포넌트) => 뉴 컴포넌트

// 2. connect
connect(설정) => function
connect(설정)(컴포넌트) => 뉴 컴포넌트

// 3. createFramentContainer
createFramentContainer(컴포넌트, 설정) => 뉴 컴포넌트


//빼빼로 예제 ex)withRouter
function 선물상자(){
    // 무엇인가 구함 ex)리본
    
    return (
    	<div>
        	<빼빼로 리본={리본}/>
        </div>
    )
}
```

### *주의할 점*

- *Don’t Use HOCs Inside the render Method*
- *Static Methods Must Be Copied Over*
- *Refs Aren’t Passed Through (feat. React.forwardRef)*

---



SASS 사용의 장점(1.CSS의 변수화(재사용) 2.mixin 3.nesting 4. 앞의 내용들을 통한 가독성증가)

->이를 통해 유지보수 쉬워짐 및 5라이브러리 쉽게 재사용



Sass/Scss 차이 {}중괄호와 ; 세미콜론

scss사용하는 이유 (기존과 비슷하고 대중성 있어서)



찾아볼내용

classNames.bind