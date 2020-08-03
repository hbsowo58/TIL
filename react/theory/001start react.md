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

const Soda = {
  name: 'Soda',
};

const helloSoda = hello.bind(anna);

helloSoda();


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

rest1('Heo', 28, 'korea');

function rest2(name, ...args) {
  console.log(name, args);
}

rest2('Heo', 28, 'korea');
```

1레벨 깊이에서만 된다는점 주의 2레벨이상 사용하려면 깊게 들어가거나 라이브러리 사용

# 비동기 패턴의 진화

```javascript
//최초 비동기 콜백함수 사용
function foo(callback) {
  setTimeout(() => {
    // 로직
    callback();
  }, 1000);
}

foo(() => {
  console.log('end');
});
console.log('이것이 먼저 실행');

//이후 promise 사용
function foo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 로직
      resolve();
    }, 1000);
  });
}

foo().then(() => {
  console.log('end');
});
console.log('이것이 먼저 실행');

//new Promise는 팬딩상태
//Promise 객체를 만들고, 로직 처리 후 성공과 실패를 알려준다.
//then 과 catch 를 통해 메인 로직에 전달한다.

//이후 async - await로 변경

function foo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 로직
      resolve();
    }, 1000);
  });
}

(async () => {
  await foo();
  console.log('end');
  console.log('이것이 먼저 실행');
})();

//기본적으로 Promise 를 사용한다.
//then 과 catch 를 통해 메인 로직에 전달한다.
//async 키워드가 붙은 함수 안에서만 await 키워드를 사용할 수 있다.

//이후 Generator 객체

function* foo() {
  console.log(0.5);
  yield 1;
  console.log(1.5);
  yield 2;
  console.log(2.5);
  yield 3;
  console.log(3.5);
}

const g = foo();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

let handle = null;

// 비동기 함수
function bar() {
  setTimeout(() => {
    handle.next('hello');
  }, 1000);
}

// 핸들을 통해 컨트롤을 넘기는 제너레이터 함수
function* baz() {
  const text = yield bar();
  console.log(text);
}

handle = baz();
handle.next();

//function* 으로 만들어진 함수를 호출하면 반환되는 객체이다.
//function* 에서 yield 를 호출하여, 다시 제어권을 넘겨준다.
//제너레이터 객체에 next() 함수를 호출하면, 다음 yield  지점까지 간다.
//redux saga에서 주로사용
```

---

# react concept

Angular , Vue (vs) React

템플릿 기반 vs 템플릿 기반이 아님

귀납적 vs 연역

react란 view를 다루는 라이브러리

*Only Rendering & Update*

- *NOT included another functionality (ex. http client, ...)*

*Component Based Development*

- *독립적인 코드 블럭 (HTML + CSS + JavaScript)*
- *작업의 단위*

*Virtual DOM*

- *이제는 DOM 을 직접 다루지 않음.*

*JSX*

- *NOT Templates*
- *transpile to JS (Babel, TypeScript)*

*CSR & SSR*

---

### 왜 가상돔을 사용할까?

DOM 을 직접 제어하는 경우

바뀐 부분만 정확히 바꿔야 하는 반면

DOM을 직접 제어하지 않는 경우

가상의 돔 트리를 사용해서

이전 상태와 이후 상태를 비교하여,

바뀐 부분을 찾아내서 자동으로 바꾼다

---

CSR vs SSR

### *CSR*

- ### JS 가 전부 다운로드 되어 리액트 애플리케이션이 정상 실행되기 전까지는 화면이 보이지 않음.

- ### JS 가 전부 다운로드 되어 리액트 애플리케이션이 정상 실행된 후, 화면이 보이면서 유저가 인터렉션 가능

### *SSR*

- ### JS 가 전부 다운로드 되지 않아도, 일단 화면은 보이지만 유저가 사용 할 수 없음.

- ### JS 가 전부 다운로드 되어 리액트 애플리케이션이 정상 실행된 후, 유저가 사용 가능

---

리액트가 하는 일

```react
// 1. 리액트 컴포넌트 => HTMLElement 연결하기
import ReactDOM from 'react-dom';

// 2. 리액트 컴포넌트 만들기
import React from 'react';
```

---

*JSX 문법으로 작성된 코드는 순수한 JavaScript 로 컴파일 하여 사용한다.*

*누가 해주나요?? => babel*

왜 JSX 을 쓰나요??

<br>

- React.createElement VS JSX 가독성 완승
- *babel 과 같은 컴파일 과정에서 문법적 오류를 인지하기 쉬움*

<br>

문법 조건

*최상위 요소가 하나여야 합니다.*

*최상위 요소 리턴하는 경우, ( ) 로 감싸야 합니다.*

*자식들을 바로 랜더링하고 싶으면, <>자식들</> 를 사용합니다. => Fragment*

*자바스크립트 표현식을 사용하려면, {표현식} 를 이용합니다.*

*if 문은 사용할 수 없습니다.*

- *삼항 연산자 혹은 && 를 사용합니다.*

*style 을 이용해 인라인 스타일링이 가능합니다.*

*class 대신 className 을 사용해 class 를 적용할 수 있습니다.*

*자식요소가 있으면, 꼭 닫아야 하고, 자식요소가 없으면 열면서 닫아야 합니다.*

- *<p>어쩌구</p>*
- <br />

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

글로벌 설치가 필요하지 않고 바로 실행이 가능하다

npx를 사용하면 캐시에 있는 버전과 비교한다. (로컬에만 저장되기 때문에 많은 문제가 생길 수 있다)

*npx create-react-app 프로젝트이름*

매번 새로운버전으로 진행

---

Angular Cli

vue Cli

React CRA - 간단하다 (설정하기 힘들다)

.bin에 있는 파일들은 바로 사용가능

```javascript
//package.json
리액트 핵심 모듈
"react": "^16.13.1"

"react-dom": "^16.13.1"

cra 를 사용하는데 필요한 모듈
"react-scripts": "3.4.1"

​Test 를 도와주는 유틸 모듈
"@testing-library/jest-dom": "^4.2.4"

"@testing-library/react": "^9.5.0"

"@testing-library/user-event": "^7.2.1"

react-script -> CRA의 핵심 모듈
node_module/.bin/react-scrit

npm start
npm build -> optimized (작게 또는 못생기게 => 못알아보게) gzip
빌드파일 생김 (public에 있는 파일들이 static 밑으로)

serve -s bulid (-s 옵션 없는 경로를 index.html로 spa 없는 페이지 위임)
->코드 바뀌어도 반응 x (파일서버)

eject 커밋 한경우에만 사용가능
```





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

npm ci (package.json.lock기준)마지막 작업했던 그대로 사용하고싶다

npm i(package.json 기준)

## Prettier

주관적인 (의도)

가로의 길이를 최대한 편한 시야로 이쁘게 만들어준다

## husky

커밋하기전 ,푸쉬하기전 뭐해라



## lint-staged

add하면 staged 상태

---









확인해볼 것

Deno

