클래스는 생성자 함수와 뭐가 다른가요??
<br>
생성자 함수보다 클래스가 엄격하다

근본적인 차이 메서드


```javascript
var o = {
	get x : f
}


o.get x로 꼭 호출해야되는거 아님

var f = o.get x
f ()


```
ES5 시절 메서드는 없다. 전부 함수였다

ES6부터 진짜 메서드가 생겼다 위와 같은 방법으로 1. 호출할 수 없고, 2. 생성자 함수로 new 못 붙인다


근본적으로 자바스크립트에서 'class 안에는 construcotor를 포함한 메서드들만 들어올 수 있다'
<br>
다른 언어는 클래스 멤버 (this.propery)들 올 수 있음 int 같은 자료형 못 붙임







---

인터페이스(추상)



```
인터페이스의 정의
 interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

type Todo = {
  id: number;
  content: string;
  completed: boolean;
};
어떤 걸 쓰든 일관적이게 써라
인터페이스는 type에 비해 못하는 기능이 존재하다 (객체에 상속 가능 같은) 나머지 성능은 같다
```

```
let foo: string | null; 유니온타입
```

```
let bar: 1 | 2  가능(예시 학년)

```



자바스크립트의 태생적 문제를 극복하고자 여러 대체어중 하나

장점 : 

- 정적타입 지원
- 도구의 지원
- 강력한 객체지향 프로그래밍 지원
- ES6 / ES Next 지원
- Angular

타입선언 
TypeScript는 아래와 같이 변수명 뒤에 타입을 명시하는 것으로 타입을 선언할 수 있다.
let foo: string = 'hello';

| array | 배열                                                         |
| ----- | ------------------------------------------------------------ |
| tuple | 고정된 요소수 만큼의 타입을 미리 선언후 배열을 표현          |
| enum  | 열거형. 숫자값 집합에 이름을 지정한 것이다.                  |
| any   | 타입 추론(type inference)할 수 없거나 타입 체크가 필요없는 변수에 사용. var 키워드로 선언한 변수와 같이 어떤 타입의 값이라도 할당 가능. |
| void  | 일반적으로 함수에서 반환값이 없을 경우 사용한다.             |
| never | 결코 발생하지 않는 값                                        |



