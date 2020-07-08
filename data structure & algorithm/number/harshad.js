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


console.log(harshad(148));
console.log(harshad(10));
console.log(harshad(12));
console.log(harshad(11));
console.log(harshad(13));