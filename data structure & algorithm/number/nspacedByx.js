function nspacedByx(x, n) {
  let answer = [];
  let y = 0;
  for (let i = 0; i < n; i++) {
    answer.push((y = y + x));
  }
  return answer;
}

function nspacedByx2(x, n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}

// 불필요한 변수 제거

function nspacedByx3(x, n) {
  return Array(n).fill(x).map((v, i) => (i + 1) * v)
}

// n 개만큼 배열을 만든 후 일단 x로 초기화한 뒤돌면서 인덱스마다 인덱스 + 1 * 자릿값만큼 해준다

console.log(nspacedByx(2, 5));
console.log(nspacedByx(4, 3));
console.log(nspacedByx(-4, 2));

console.log(nspacedByx2(2, 5));
console.log(nspacedByx2(4, 3));
console.log(nspacedByx2(-4, 2));

console.log(nspacedByx3(2, 5));
console.log(nspacedByx3(4, 3));
console.log(nspacedByx3(-4, 2));