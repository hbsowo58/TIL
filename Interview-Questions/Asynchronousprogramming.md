비동기 프로그래밍 Ajax
<br>
<br>
자바스크립트를 이용해 비동기적으로 서버와 클라이언트 간에 데이터를 교환할 수 있는 통신방식
<br>
<br>
보통 서버로부터 웹페이지가 반환되면 전체를 갱신해야 하는데, Ajax를 사용하면 페이지 일부를 갱신하고도 동일
<br>
->부드러운 화면 효과
<br>
<br>
Promise와 callback의 차이
<br>
<br>
비동기 함수의 error는 원래 유실되었으나, promise에서 error가 발생하면 error를 래핑 한
<br>
promise가 반환되기 때문에 해결할 수 있다. promise라고 해서 콜백 헬 이 발생하지 않는 것은 아니다
<br>
정확하게 promise는 setTimeout 같은 비동기 함수의 유실된 에러를 해결하기 위해 나왔다고 보는 것이 옳다고 생각한다..
<br>
둘 다 자바스크립트 비동기 처리를 위한 방식이며,
처음 비동기 방식은 callback 방식을 사용했는데 -> callback hell이 발생했다 (함수처리 순서를 보장하기 때문)
es6부터 Promise 출현 및 정식 채용
<br>
promise 생성자를 통해 함수를 인스턴스화하며 비동기 처리에 성공하면 resolve메소드를 호출해서 비동기 처리결과를 후속메소드로 전달
실패하면 reject메소드를 호출해서 에러메시지를 후속처리 메소드로 전달
후속처리 메소드는 then, catch 둘다 Promise 객체반환
<br>
Async Awiat
<br>
promise를 더욱 쉽게하기위한 es8나온 문법 함수의 앞부분에 async 추가 함수 내부에 Promise 앞부분에 await키워드 사용
코드가 간결해지지만, 에러 처리를 위해 try catch사용해야함
