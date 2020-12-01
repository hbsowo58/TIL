노드 14버전에서 멀티 스레드 가능하게 (가능성은 열어둠)



노드는 스레드는 4개가 생기는데 (컨트롤 가능한것 1개 ,준비 3개)



논블로킹(순서를 보장하지 않으나 순서는 있음) vs 동기 (실행컨텍스트)



스레드 한개 => 코어 1개를 차지함

-> 32코어를 써도 나머지는 놀고있다

=> 싱글스레드가 효율적이진 않으나 프로그래밍 난이도가 쉽다 cpu,메모리 자원을 적게 사용한다



멀티 프로세싱으로 많이 극복



노드로 만든 서버의 장단점은 자바스크립트로 만든 장단점, 노드의 장단점과 같다

IO작업이 많은 서버에 적합



노드의 적 DENO





웹스톰 (리팩토링의 신) -> 대규모 프로젝트가 아니면 크게 안와닿을 수 있음





2강

---



메모리 = 임시기억공간, 새로고침하면 사라짐

호출하면, 메모리속에서 선언했는지 찾아봄

 

promise.then/catch

process.nextTick

(nextTickQueue)

(마이크로테스트큐)



백그라운드는 (c++ or 운영체제)



setTimeout 메서드 0을 넣어도 사실상은 1초임(내부 코드를 보면앎)



``에 함수호출 기능이있음



```javascript
function a(){};
a``;
호출가능
```



화살표함수 객체를 리턴하는경우 괄호 필수



화살표함수의 this는 부모의 this를 물려받기때문에 완벽 대체 x

this를 써야하는 상황 = function 아니면 화살표함수로 통일

왠만하면 this를 안쓰는게 베스트



this있을땐 구조분해할당 안쓰는게 좋음



async의 return은

main().thend ((name) => ...)

const name = await main()

으로 받아야한다



서버로 요청 보내는 코드

XMLHttpReqeust -(시작 지금은 많이사용 x)

Axios라이브러리 사용하기로 결정



3장

---

 REPL

red eval     loop



node의 모듈과 자바스크립트의 모듈은 다르다



자바스크립트에는 없는데 노드에는 있는 제공(require, module exports)



setImmediate(즉시 실행) settimeout,0이랑 비슷, 실행 순서의 차이

전역의 this는 module.exports



```javascript
require('./var');
다른파일을 실행만 시키고싶다
```



하드디스크에서 옮겨오는건 느리고 메모리에서 옮겨오는건 빠르다 (캐싱)



import는 가장 최상단 vs require는 가장최상단 아니여도됨

