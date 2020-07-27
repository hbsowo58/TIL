리액트 컴포넌트 생명주기 : 마운트 될때부터 언마운트 될때까지 과정

<br>

오버라이딩 (상속) 부모의 메소드를 호출하거나 부모의 메소드를 덮어써서 나만의 메소드로 바꿀 수 있는것

<br>

'필수' 라이프사이클 rneder = 없으면 쓰로우 발생 나머지는 옵셔너블(옵션)

---

라이프사이클은 크게 마운트 / 언마운트 컴포넌트가 인식되기/ 분리하기

가장먼저 컨스트럭터

componentWillMount (기존에 사용되었지만 이제 사용X) -> 마운트 할려고해, 돔이없음

-> 최신버전에서는 getDerivedStateFromProps() 메서드로 대체되는 듯

render

componentDidMount 

---

Will/Did (어플리케이션을 만드는 모든 프레임워크가 가지고있음)

ex) VueDidload 

---

props나 state가 바뀌면 rerendering

그과정에서 라이프사이클이 있음

---

*componentWillReceiveProps* < props가 바뀌면 여기서부터

*shouldComponentUpdate*< state가 바뀌면 

*componentWillReceiveProps* <부모의 컴포넌트가 랜더되면

'부모의 변경은 props의 업데이트다'

*componentDidUpdate* <강제로 업데이트하려고하면 falseupdate





## componentWillReceiveProps

- *props 를 새로 지정했을 때 바로 호출됩니다.*
- *여기는 state 의 변경에 반응하지 않습니다.*
  - *여기서 props 의 값에 따라 state 를 변경해야 한다면,*
    - *setState 를 이용해 state 를 변경합니다.*
    - ***그러면 다음 이벤트로 각각 가는것이 아니라 한번에 변경됩니다.***

여기서 state를 한번에 변경할 수 있는게 포인트



## shouldComponentUpdate

- *props 만 변경되어도*
- *state 만 변경되어도*
- *props & state 둘다 변경되어도 (componentWillReceiveProps)*
- *newProps 와 new State 를 인자로 해서 호출*
- *return type 이 boolean 입니다.*
  - *true 면 render*
  - *false 면 render 가 호출되지 않습니다.*
  - *이 함수를 구현하지 않으면, 디폴트는 true*

직접 건드리는 일은 없음

## componentWillUpdate 잊기

- *컴포넌트가 재 랜더링 되기 직전에 불립니다.*
- *여기선 setState 같은 것을 쓰면 아니됩니다.*

## componentDidUpdate 잊기

- *컴포넌트가 재 랜더링을 마치면 불립니다.*



## Component 언마운트

*componentWillUnmpunt*

타이머해제, 서버에 보낸 요청해제 (안하면 뭐할라고해서 에러가남)

히스토리를 건들여서 페이지 이동

---

# Component 라이프사이클 변경 (v16.3)

static메서드이므로 this사용 불가

return state변경

<br>

*constructor*

*componentWillMount* *=> **getDerivedStateFromProps*** 스태틱메소드

*render*

*componentDidMount*

 <br>

*componentWillReceiveProps* *=> **getDerivedStateFromProps*** 위로 합쳐졌다

*shouldComponentUpdate*

*render*   -> 호출되면 가상돔의 dif를 만듬

componentWillUpdate => **getSnapshotBeforeUpdate **적용전

*(dom 에  적용)*

componentDidUpdate

<br>

componentWillUnmount



시점에 무슨일을 해야되는지를 작성해야함

Props로부터 state를 만들어내야된다 return이 생김



getSnapshotBeforeUpdate 쓰고 DidUpdate안쓰면 에러나고 알려줌 왜안쓰냐고



*static getDerivedStateFromProps (props 변경)*

*shouldComponentUpdate (state 변경)*

***render***

*getSnapshotBeforeUpdate (componentDidUpdate 와 함께 사용)*

*(dom 에 적용)*

*componentDidUpdate*



## Component 에러 캐치

*componentDidCatch*

에러가 발생하는 컴포넌트의 '부모'가 호출 가장 최상단(index.js까지 가야?)

<br>

componentDidUpdate에서 setState를쓰면 무한에 빠질 가능성이 있어서 쓰면 안되는데

지금까지 이프문으로 처리를 했었다

---

# React 의 라우팅 이해하기

url 읽기(라이브러리 사용안할때 window.location 객체의 href 프로퍼티를 본다)

<br>

기존에는 템플릿을 요청해서 받아왔으니

spa는 일단 리액트앱을 가져오면 다시 서버로 요청할 필요가 없고

어떤 컴포넌트를 보여줄지만 정하면된다

그럼에도 불구하고 검색창에 / 요청을하면 캐싱이 되어있기때문에 더 빠를것이다

```react
<Route path="/" exact component={Home} />
<Route path="/about" component={About} />
<Route path="/profile" component={Profile} />
//정확하게 표현해야한다 exact속성이 없을시 '들어있으면' 화면에 출력하기 때문
```

<br>

가장큰 차이점은 새로고침을 누르면 서버로 간것이다

spa 이기에 a로 링크이동을 할 필요가없다

```react
<a href="/">Home</a> // 새로고침 발생 서버요청 o
     
<Link to="/">Home</Link> //새로고침 발생x 서버요청 x 내부적으론 a태그
```

<br>

match 알고리즘

링크 to 뒤에적힌것 또는 라우터에 path에 적은 것과 브라우저 '실제 url'과 비교

<br>

```react
npm i query-string

import queryString from "query-string";

const reuslt = queryString.parse(~~);
//분해 가능
const {name} = result
```

<br>

switch

*여러 Route 중 순서대로 먼저 맞는 하나만 보여줍니다.*

*exact 를 뺄 수 있는 로직을 만들 수 있습니다.*

*가장 마지막에 어디 path 에도 맞지 않으면 보여지는 컴포넌트를 설정해서,
"Not Found" 페이지를 만들 수 있습니다.*

```react
    <BrowserRouter>
      <switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/profile/:id" component={Profile} />
      </switch>
    </BrowserRouter>
```

<br>

```react
export default withRouter(~~);
// Hoc () 그냥 함수임 보통 with가 앞에 붙음 인풋을 컴포넌트로 받고 아웃풋을 컴포넌트로 주는 history,match,location 등을 넣어준다
```


