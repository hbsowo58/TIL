function digitSum(x) {
  return ("" + x).split("").reduce((a, b) => +a + +b, 0);
}

// 매개변수를 문자열로 변경한 후 split 메 서드로 배열에 각각 나눈 후 reduce로 하나씩 더한다 다만 문자열이기 때문에
// 형 변환하여 더한다
// 끝에 0이 들어와서 배열이 없을 때 테스트 케이스에서 에러가 나서 0추가

console.log(digitSum(123));
console.log(digitSum(987));
console.log(digitSum(0));