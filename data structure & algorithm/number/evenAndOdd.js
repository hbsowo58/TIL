function evenAndOdd(num) {
  var answer = "";
  num % 2 === 0 ? (answer = "Even") : (answer = "Odd");
  return answer;
}

function evenAndOdd2(num) {
  // if (num < 0) return false;
  return num % 2 ? "Odd" : "Even";
}
// 0이 false라는 것을 이용한 한 줄로 가독성을 높임 0보다 작은 수를 false 처리하려고 했는데 검색 결과 음수도 홀, 짝이 구분된다

console.log(evenAndOdd(0));
console.log(evenAndOdd(1));
console.log(evenAndOdd(2));