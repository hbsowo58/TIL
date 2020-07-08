function harshad(x) {
  const arr = ("" + x).split("");
  let sum = 0;
  arr.forEach((e) => sum += +e);
  return x % sum === 0;
}

// 1. 하샤드 수가 아닌 것만 찾아서 false를 적자
// 2. 넘어온 게 정수니까 배열로 바꾸어서 각각 자리수를 분해한 후
// 3. 모든 인덱스 값을 합쳐서 sum을 만들어서
// 4. 들어온 매개변수를 sum으로 나누어 0인지 검사하는 코드를 작성하자

function harshad2(x) {
  return x % ("" + x).split("").reduce((a, b) => +a + +b) === 0
}

// 가독성이 떨어짐에도 1줄 코드로 바꾸어보았다 전체적인 건 harshad 함수와 같은데 차이는 변수 사용 x 및 forEach에서 reduce로 변경하였다
// forEach에서 누적하는 연산을 하니 eslint에서 에러를 출력하기 때문이다. 자바스크립트의 암묵적 형 변환 및 부수효과를 이용하였다

console.log(harshad(148));
console.log(harshad(10));
console.log(harshad(12));
console.log(harshad(11));
console.log(harshad(13));
console.log(harshad2(148));
console.log(harshad2(10));
console.log(harshad2(12));
console.log(harshad2(11));
console.log(harshad2(13));