# 리액트 시작하기

전과정

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

현과정

*리액트를 위한 JS 문법 정리*

*React Concept*

*React 라이브러리*

*JSX 문법*

*React Component 만드는 법*

*props 와 state*

*DOM 이벤트 다루기*

*컴포넌트 라이프사이클*

---

신기술을 선택적으로 분석하고 습득할 수 있는 능력

---

문법정리의 내용 (리액트를 사용하려면 필요한 자바스크립트 문법 지식)

### *const let*

### *template string*

### *arrow function*

### *.bind(this)*

### *const {children} = this.props;*

### *...props*

### *Promise*

### *async await*

### *Generator*

---

SyntaxError

throw New error 

ReferenceError 참조에러

에러를 throw하고 싶다면 에러객체를 상속받으라 (에러를 상속한다?)

---

```javascript
//var의 단점
(function() {
  if (true) {   
    var variable = 'function scope';
  }
  
  console.log(variable);
})();
//1.함수레벨 스코프

(function() {
  var variable = 'function scope';
  var variable = 'duplicated';
  
  console.log(variable);
})();
//2.중복 선언 가능
(function() {
  variable = 'no var';
  
  console.log(variable);
})();

console.log(variable);
//3.생략가능

(function() {
  console.log(variable);
  
  var variable = 'hoisted';
})();

(function() {
  var variable;
  
  console.log(variable);
  
  variable = 'hoisted';
})();
//4.호이스팅
```

-> var의 단점을 해결하고자 es6에 let, const 키워드 추가

```javascript
// 1. 블록 레벨 스코프
{
  let variable = 'block scope';
  console.log(variable);
}

// 2. 중복 선언 => SyntaxError
{
  let variable = 'block scope';
  let variable = 'duplicated';
  console.log(variable);
}

// 3. 호이스팅 => ReferenceError
{
  console.log(variable);
  let variable = 'hoisted';
}
```

let은 변경 가능, const는 불가능

```javascript
// Primitive
let a = 'a';
a = 'b';
a;

const c = 'c';
c = 'd'; // TypeError
c;


let e = {
  foo: 'foo',
};
e = {
  bar: 'bar',
};
e;

const f = {
  foo: 'foo',
};
// f = {
//   foo: 'bar',
// }; TypeError
f.foo = 'bar';
f;

// 변경을 재할당이라고도 하는데 구분이 필요하다
```

ES6 이후에서 var 키워드는 더 이상 사용하지 않는다는 것을 알게 되었고, let과 const만 남게 된다는 사실을 얻었다.

Q) 당신의 코드의 let과 const의 비율은 어떻게 되나요? => 정확하게 말할 수 없지만, 대부분 const입니다 왜냐면

재할당할 일이 없을 것이라 추측하고 참조 값이 바뀔 일이 없다 꼭 변경(재할당)이 필요한 경우에만 let을 사용

코드 리뷰 ) let은 쓴 자리가 const를 쓸 수 없는지 확인한다 - 의도 명확히

<https://overreacted.io/on-let-vs-const/>

---

# template string

```javascript
const name = 'Heo';
console.log('안녕하세요.\n제 이름은 ' + name + ' 입니다.');//ES6이전
console.log(`안녕하세요.
제 이름은 ${name} 입니다.`);//ES6 이후

```

---

함수를 정의하는 많은 방법

함수 표현식, 함수 정의문 new Function

const sum = new Function('a','b', 'return a+b');

---

## arrow function

- *자신의 this 를 만들지 않는다.* -> 그렇기에 생성자로 사용할 수 없다
- 이름 x 부를 수 없음  만들어서 변수에 넣어야함! 익명함수
- 리턴만 있으면 {} 중괄호 생략, 인자가 하나면 () 매개변수에 괄호 생략

```javascript
function Foo() {
  this.name = 'Heo';

  setTimeout(function() {
    console.log(this.name);
  }, 1000);

  setTimeout(() => {
    console.log(this.name);
  }, 1000);
}

const foo = new Foo();
// window.name , Heo 출력 화살표함수는 렉시컬디스 일반함수는 window를 가리킴

const a = () => {
  return '리턴';
};

console.log(a());

// 리턴이 바로 표현 가능하면, { return } 생략
const b = () => '리턴';

console.log(b());

// 매개변수가 한개면 () 생략
const c = props => `리턴 ${props}`;

console.log(c('프롭스'));
```

데코레이터 : 바인드를 하는 autobind  @boundMethod

---

# 함수.bind(디스)

함수의 this로 '디스'를 사용하는 ☆"함수"를 만들어 리턴

```javascript
function hello() {
  console.log(`안녕하세요 ${this.name}`);
}

const Heo = {
  name: 'Heo',
};

const helloHeo = hello.bind(Heo);

helloHeo();

const anna = {
  name: 'Anna',
};

const helloAnna = hello.bind(anna);

helloAnna();


```

## Destructuring assignment

```javascript
const foo = {
  a: '에이',
  b: '비이',
};

const { a, b } = foo;
console.log(a, b);

const bar = ['씨이', '디이'];

const [c, d] = bar;
console.log(c, d);

const { a: newA, b: newB } = foo;
console.log(newA, newB);
```

반환값을 만들때 배열형태를 추천함 (배열은 순서가 존재하기 때문) = react 등이 배열로 자료구조를 주는 이유

작업을 할때 네이밍 할 수 있도록.

## Spread 와 Rest

```javascript
function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(1, 2, 3));

const numbers = [2, 3, 4];

console.log(sum(...numbers));

const obj = { a: 3, b: 4, c: 5 };

const cloned = { ...obj, a: 6 };
cloned.c = 10;

console.log(obj, cloned);

const obj1 = { a: { b: 100 } };

const obj1Cloned = { ...obj1 };
obj1Cloned.a.b = 200;

console.log(obj1, obj1Cloned);

const obj2 = { a: { b: 100 } };

const obj2Cloned = { ...obj2, a: { ...obj2.a } };
obj2Cloned.a.b = 200;

console.log(obj2, obj2Cloned);


function rest1(...args) {
  console.log(args);
}

rest1('mark', 37, 'korea');

function rest2(name, ...args) {
  console.log(name, args);
}

rest2('mark', 37, 'korea');
```

1레벨 깊이에서만 된다는점 주의 2레벨이상 사용하려면 깊게 들어가거나 라이브러리 사용

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

