마운트 될때부터 언마운트 될때까지 과정

오버라이딩 (상속) 부모의 메소드를 호출하거나 부모의 메소드를 덮어써서 나만의 메소드로 바꿀 수 있는것

'필수' 랜더 = 없으면 쓰로우 발생 나머지는 옵셔너블



크게 마운트 / 언마운트

가장먼저 컨스트럭터

componentWillMount (써보신적이 없다고함) : 특정한 이유로 쓰긴할텐데..

-> 마운트 할려고해, 돔이없음

render

componentDidMount 



Will/Did (어플리케이션을 만드느 모든 프레임워크가 가지고있음)

ex) VueDidload 





props나 state가 바뀌면 render가 되는데

그과정에서 라이프사이클이 있음



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

## componentWillUpdate 잊기

- *컴포넌트가 재 랜더링 되기 직전에 불립니다.*
- *여기선 setState 같은 것을 쓰면 아니됩니다.*

## componentDidUpdate 잊기

- *컴포넌트가 재 랜더링을 마치면 불립니다.*



## Component 언마운트

*componentWillUnmpunt*

타이머해제, 서버에 보낸 요청해제 (안하면 뭐할라고해서 에러가남)

히스토리 고인물

---

# Component 라이프사이클 변경 (v16.3)

*constructor*

*componentWillMount* *=> **getDerivedStateFromProps*** 스태틱메소드

*render*

*componentDidMount*

 

*componentWillReceiveProps* *=> **getDerivedStateFromProps***

*shouldComponentUpdate*

*render*

*componentWillUpdate => **getSnapshotBeforeUpdate***

*(dom 에  적용)*

*componentDidUpdate*



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



에러가 발생하는 컴포넌트의 '부모'가 호출









componentDidUpdate에서 setState를쓰면 무한에 빠질 가능성이 있어서 쓰면 안되는데

지금까지 이프문으로 처리를 했었다

---

# React 의 라우팅 이해하기



기존에는 템플릿을 요청해서 받아왔으니

spa는 일단 리액트앱을 가져오면 다시 서버로 요청할 필요가 없고

어떤 컴포넌트를 보여줄지만 정하면된다

그럼에도 불구하고 검색창에 / 요청을하면 캐싱이 되어있기때문에 더빠를것이다



가장큰 차이점은 새로고침을 누르면 서버로 간것이다





```
   
      <a href="/">Home</a> // 새로고침 발생 서버요청 o
     
      <Link to="/">Home</Link> //새로고침 발생x 서버요청 x 내부적으론 a태그
```



mactch 알고리즘

링크 to 뒤에적힌것 또는 라우터에 path에 적은 것과 브라우저 '실제 url'과 비교



Hoc () 그냥 함수 보통 with가 앞에 붙음

인풋을 컴포넌트로 받고 아웃풋을 컴포넌트로 주는