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

console.log(nspacedByx(2, 5));
console.log(nspacedByx(4, 3));
console.log(nspacedByx(-4, 2));

console.log(nspacedByx2(2, 5));
console.log(nspacedByx2(4, 3));
console.log(nspacedByx2(-4, 2));