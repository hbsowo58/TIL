# closure

클로저는 함수와 그 함수가 선언된 렉시컬 환경과의 조합이다.

```javascript
const count = (function () {
  let age = 0;

  function inner() {
    return age++;
  }

  return inner;
}());

console.log(count());
console.log(count());
```

count라는 함수를 만든다고 쳤을때

<br>

count라는 변수에는 함수가 즉시실행되어 할당된다 이 함수에는 age라는 변수가 있는데

inner라는 내부함수에서 age를 참조할 수 있는 이유는 정적스코프(선언됬을때 스코프를 결정하기 때문)

이며 자유변수에 접근할 수있고 내부함수를 반환한다.

<br>

count가 호출되었을때 함수의 생명주기는 다했지만 함수가 선언됬을때의 렉시컬 환경이 남아있어서

변수에도 접근가능함을 클로저라 한다.