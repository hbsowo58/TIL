function gcdlcm(n, m) {
  var answer = [];
  var minNum = Math.min(n, m);
  var maxNum = Math.max(n, m);
  answer[0] = gcd(minNum, maxNum);
  answer[1] = lcm(minNum, maxNum);
  return answer;
}

// 최대공약수
function gcd(minNum, maxNum) {
  return minNum % maxNum === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
}
// 최소공배수
function lcm(minNum, maxNum) {
  return (minNum * maxNum) / gcd(minNum, maxNum);
}

console.log(gcdlcm(3, 12));
console.log(gcdlcm(2, 5));
