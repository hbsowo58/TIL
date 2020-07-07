function stringToNumber(s) {
  return s *= 1;
}

// 자동형변환을 이용하였는데 프로그래머스에서는

function stringToNumber2(s) {
  return ~~s;
}

// 2와같이 변환되었는데 Math.floor처럼 동작하는 것 같다(Math.floor보단 느린듯)

function stringToNumber3(str) {
  return str / 1
}
// 1과 동일한 로직

function stringToNumber4(str) {
  return +str;
}

// 정수형을 문자열 연산을 원할때 + 덧셈연산자의 부수효과를 이용한다고 생각하였는데, 문자열에서 숫자형으로 변경할때도 되는 것 같다.

console.log(stringToNumber('1234'))
console.log(stringToNumber('-1234'))
console.log(stringToNumber2('1234'))
console.log(stringToNumber2('-1234'))
console.log(stringToNumber3('1234'))
console.log(stringToNumber3('-1234'))
console.log(stringToNumber4('1234'))
console.log(stringToNumber4('-1234'))