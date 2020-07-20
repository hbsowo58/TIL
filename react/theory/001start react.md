# 리액트 시작하기

- 리액트를 위한 JS 문법 정리
- Create React App
- Prettier + ESLint + husky + lint-staged 사용하기
- 리액트 컴포넌트 디버깅
- React Concept
- React 라이브러리
- JSX
- React Component 만드는 법
- Props 와 State
- Event Handling
- [Homwork] tic-tac-toe

---

신기술을 선택적으로 분석하고 습득할 수 있는 능력

---

SyntaxError

throw New error 

ReferenceError 참조에러

에러를 throw하고 싶다면 에러객체를 상속받으라 (에러를 상속한다?)

---

함수를 정의하는 많은 방법

함수 표현식, 함수 정의문 new Function

const sum = new Function('a','b', 'return a+b');

---

내 코드의 대부분은 const이다 왜냐?

재할당할일이 없을것이라 추측하고 참조값이 바뀔일이 없다

코드리뷰 ) let은 쓴자리가 const를 쓸수없는지 확인한다 - 의도 명확히



<https://overreacted.io/on-let-vs-const/>



## arrow function

- *자신의 this 를 만들지 않는다.* -> 그렇기에 생성자로 사용할 수 없다

- 이름 x 부를 수 없음  만들어서 변수에 넣어야함!

  

데코레이터 : 바인드를 하는 autobind  @boundMethod

---

# 함수.bind(디스)

함수의 this로 '디스'를 사용하는 ☆"함수"를 만들어 리턴

## Destructuring assignment

배열형태를 추천함 (배열은 순서가 존재하기 때문) = react 등이 배열로 자료구조를 주는 이유

작업을 할때 네이밍 할 수 있도록.



## Spread 와 Rest

1레벨 깊이에서만 된다는점

## Promise

new promise() 팬딩상태



resolve, reject 콜백으로 결과를 알려줌

## async - await

기본적으로 promise로 만들어지는 함수가 있어야됨



## Generator 

function* 키워드 뒤에 핸들러

리덕스 saga에서 주로사용

---

Angular , Vue (vs) React

템플릿 기반 vs 템플릿 기반이 아님

귀납적 vs 연역

---

# 통신방법의 발전

XMLHTTPrequest => fetch(IE문제) -> axios 같은 XMLHTTPreqeust기반

---

HTML 에서 어트리뷰트 VS 리액트에서 prop 모여서 props

---

```react
//a가 true면 1 아니면 2
{a && 1} {!a && 2}
```

## 왜 npx 가 필요했을까요??

글로벌 설치x

바로실행 o

*npx create-react-app 프로젝트이름*

매번 새로운버전으로 진행

---

베포 (빌드해서 )

npm test(jest -페이스북)

모카 -> jest (느림) ->다시 모카

--

eject (비디오테이프 / 시디)

-> 안보이던애들이 다나옴 바벨등

---

npm run build

어글리파이 (못생기게) / 경량화

---

aws / 도커로 말기 (배포)

---

serve 파일들을 서버로 만들어서 딜리버리할 수 있게 해주는 패키지

---

zeit / next.js

---

-s 어떤 요청이 오더라도 index.html(루트)로 간다

-single page application의 약자

---

yarn 을안쓰고 npm을 써야하는이유

---

packege-lock은 어디에 쓰는 물건인고?

npm i를 쓰면 고장날 수 없어

yarn으로 설치하면 yarn.lock이 생김

yarn의 메리트 (속도가 좀빠르다?)

---

npm ci (마지막 작업했던 그대로 사용하고싶다)

## Prettier

주관적인 (의도)

가로의 길이를 최대한 편한 시야로 이쁘게 만들어준다

## husky

커밋하기전 ,푸쉬하기전 뭐해라



## lint-staged

add하면 staged 상태



# React Concept

*View 라이브러리*



스벨터 (리액트에 반대대는 목적)

-돔을 직접 바꿀꺼야

리액트

-돔을 비교해서 바꿀거야



```
class ClassComponent from React.Component {
  render() {
    return (<div>Hello</div>);
  } //랜더함수를 구현 
}
```



this.setState를 했을때만 렌더하게

state = ""하면 모든것을 찾아내야되니까







확인해볼 것

Deno

