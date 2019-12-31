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

function collatzConjecture2(num) {
  let cnt = 0;
  if (num === 1) return cnt;
  while (cnt < 501) {
    num % 2 === 0 ? (num /= 2) : (num = num * 3 + 1);
    cnt += 1;
    if (num === 1) {
      return cnt;
    }
  }
  return -1;
}

// 1 함수까지 필요도 없을 것 같았다
// 2 answer라는 변수도 필요 없다.
// 3 재귀로 풀어야 하나?

function collatzConjecture3(num, count = 0) {
  return num === 1
    ? count >= 500
      ? -1
      : count
    : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1, ++count);
}

// 1 재귀 풀이 한 줄 num이 1인지 확인 후 count가 500을 넘으면 -1, 아니면 0을 리턴한다(이경우 최초 num에 1 들어옴)
// 2 아니라면 재귀로 로직을 반복한다 삼 항 조건 연산자 안에 삼 항 조건 연산자가 있어서 헷갈리는 거 조심

console.log(collatzConjecture(6));
console.log(collatzConjecture(16));
console.log(collatzConjecture(626331));
console.log(collatzConjecture(0));
console.log(collatzConjecture(1));

console.log(collatzConjecture2(6));
console.log(collatzConjecture2(16));
console.log(collatzConjecture2(626331));
console.log(collatzConjecture2(0));
console.log(collatzConjecture2(1));

console.log(collatzConjecture3(6));
console.log(collatzConjecture3(16));
console.log(collatzConjecture3(626331));
console.log(collatzConjecture3(0));
console.log(collatzConjecture3(1));
