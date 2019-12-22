function nspacedByx(x, n) {
  let answer = [];
  let y = 0;
  for (let i = 0; i < n; i++) {
    answer.push((y = y + x));
  }
  return answer;
}

console.log(nspacedByx(2, 5));
console.log(nspacedByx(4, 3));
console.log(nspacedByx(-4, 2));