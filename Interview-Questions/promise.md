# promise

프로미스는 자바스크립트에서 비동기 처리를 위한 패턴입니다.

<br>

자바스크립트는 비동기 처리를 위해 콜백 패턴을 이용하였습니다.

그 문제점으로 가독성이 나쁘고 비동기 처리 중 에러 처리가 어려우며 여러 개의 비동기 처리가 어려웠습니다.

<br>
물론 콜백 헬이라는 문제도 발생하였지만, 주관적인 가장 큰 문제점은 에러 처리의 한계가 있다는 점으로 느껴집니다.

이에 ES6에서 비동기 처리를 위한 프로미스 패턴이 도입되었습니다.

 <br>

```
// 프로미스 생성
const promise = new Promise((resolve, reject) => {
  // Promise 함수의 콜백 함수 내부에서 비동기 처리를 수행한다.
  if (/* 비동기 처리 성공 */) {
    resolve('result');
  } else { /* 비동기 처리 실패 */
    reject('failure reason');
  }
});
```

프로미스는 표준 빌트인 객체이며, promise 생성자 함수는 비동기 처리를 수행할 콜백 함수를 인수로 전달받는데 이 콜백 함수는 resolve와 reject 함수를 인수로 전달받습니다.

또한 프로미스를 통해 구현한 비동기 함수는 프로미스를 반환하며 후속처리 메서드를 통해 에러 처리가 비동기적으로 동작합니다.

 <br>

```
new Promise(resolve => resolve('fulfilled'))
  .then(v => console.log(v), e => console.error(e)); // fulfilled

// rejected
new Promise((_, reject) => reject(new Error('rejected')))
  .then(v => console.log(v), e => console.error(e)); // Error: rejected
  
// rejected
new Promise((_, reject) => reject(new Error('rejected')))
  .catch(e => console.log(e)); // Error: rejected
  
new Promise(() => {})
  .finally(() => console.log('finally')); // finally
```

프로미스는 5개의 정적 메서드를 제공합니다.

 <br>

```
const resolvedPromise = Promise.resolve([1, 2, 3]);
resolvedPromise.then(console.log); // [1, 2, 3]

const rejectedPromise = Promise.reject(new Error('Error!'));
rejectedPromise.catch(console.log); // Error: Error!

//resolve,reject

const requestData1 = () => new Promise(resolve => setTimeout(() => resolve(1), 3000));
const requestData2 = () => new Promise(resolve => setTimeout(() => resolve(2), 2000));
const requestData3 = () => new Promise(resolve => setTimeout(() => resolve(3), 1000));

Promise.all([requestData1(), requestData2(), requestData3()])
  .then(console.log) // [ 1, 2, 3 ] ⇒ 약 3초 소요
  .catch(console.error);
  
//promise.all

Promise.race([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000)) // 3
])
  .then(console.log) // 3
  .catch(console.log);
  
//promise.race

Promise.allSettled([
  new Promise(resolve => setTimeout(() => resolve(1), 2000)),
  new Promise((_, reject) => setTimeout(() => reject(new Error('Error!')), 1000))
]).then(console.log);

//promise.allSettled
```

마지막으로 프로미스의 후속처리 메서드의 콜백 함수는 마이크로 태스크 큐에 저장됩니다.

 <br>

```
setTimeout(() => console.log(1), 0);

Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));
```

1-2-3 순으로 출력될 것 같아 보이지만, 2-3-1로 출력되는데, 일반 비동기 함수의 콜백 함수는 태스크 큐에 저장되는 반면

promise의 후속처리 메서드의 콜백 함수는 마이크로 태스크 큐에 저장되어 일반 태스크 큐보다 우선순위를 높게 배정받기 때문입니다.

<br>

[원본](https://hbsowo58.tistory.com/399?category=786659)