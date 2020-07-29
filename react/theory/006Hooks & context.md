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

# Additional Hooks

기본훅들로 이뤄져있음