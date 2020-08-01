# Hooks & context

hook이란, 일단 함수



(x)함수형 컴포넌트에서 state등을 사용할때 필요한 함수(hook은 단순히 함수형 컴포넌트에서 state를 사용

하기위함이 아니다.) -> 라이프 사이클을 대체하기 위함이 아니다.



기존에 함수형 컴포넌트는 stateless라고 부를 정도로 state 사용불가하여 class로 변경해야했지만

hooks 출현이후 class형으로 해야할 필요없다(기존의것을 굳이 바꿀필요없음) class형 컴포넌트를 이해하려면

this에 대한 이해부터 많은 지식이 필요하나 hooks를 사용하면 함수형 컴포넌트에서 다양한 함수들과

lifecycle등과 state등을 연결하여 사용할 수 있고 함수형 프로그래밍의 장점은

순수함수와 보조함수의 조합으로 사이드이펙트를 방지할 수 있게된다.

---

basic hook (useState, useEffect)



useEffect(랜더직후에 할일이 있을때 사용, cleanup시에 할일이 있을때 사용)

---

hooks 가 출현한 이유: 라이프 사이클 마다 반복하는 행위가 있다면, 재사용이 어렵다

this.state는 로직에서 레퍼런스를 공유한다 -> 상황에 따라 필요할 수 있음

---

useEffect -> 라이프 사이클 hook 대체 가능

#### 리턴이 된 직후 실행된다(함수,배열)

의존성 배열안에 있는 인자가 바뀐뒤 실행 된다                              -> 모든 함수형 컴포넌트의 결과물은 return뒤

return 뒤에가 componentWillIUnmount의 역할을 한다

---

최초에 렌더링

1.최초의 UI렌더링

2.useEffect 실행                        

3.상태변화

4.변화에 따른 UI렌더링

---

hooks에 use~가 붙는이유: 재사용에 목적을 두기에 네이밍을 use~로 하였다

---

hoc(props)변경 vs custom hooks(state)변경

---

useMemo(함수,의존성배열) 값을 다룰때

React.Memou(최적화)



useCallback 함수 다룰때



createRef(uncontrolled component) vs useRef





---

# Additional Hooks

기본훅들로 이뤄져있음



함수형 컴포넌트에서 createRef는 최악이다(클래스형과 함수형의 구분을 못한다는것)



context API 어디서든 접근할 수 있는 공간 = "어디서든 접근할 수 있는 부분이 있다"

