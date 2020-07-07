function stringToNumber(s) {
  return s *= 1;
}

// 자동형변환을 이용하였는데 프로그래머스에서는

function stringToNumber2(s) {
  return ~~s;
}

// 2와같이 변환되었는데 Math.floor처럼 동작하는 것 같다(Math.floor보단 느린듯)



console.log(stringToNumber('1234'))
console.log(stringToNumber('-1234'))
console.log(stringToNumber2('1234'))
console.log(stringToNumber2('-1234'))