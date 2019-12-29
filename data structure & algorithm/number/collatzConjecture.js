function even(n) {
  return n / 2;
}

function odd(n) {
  return n * 3 + 1;
}

function collatzConjecture(num) {
  let answer = 0;
  let cnt = 0;
  while (cnt < 501) {
    num % 2 === 0 ? (answer = even(num)) : (answer = odd(num));
    cnt += 1;
    num = answer;
    if (num === 1) {
      return cnt;
    }
  }
  return -1;
}

// 1 이분할 하는 함수, 세배하고 1을 더하는 함수를 만든 뒤
// 2 3항 조건 연산자로 while 문을 돌린다
// 3 cnt라는 변수를 만들어 500번 이상 돌리면 return -1
// 13번 테스트케이스에서 에러가 난다 0이 매개변수로 들어오거나 500번 조건문에서 잘못되지 않았을까 추측해본다

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));