function hideNumbers(phone_number) {
  const frontNum = phone_number.slice(0, phone_number.length - 4).replace(/(\d)/g, "*");
  const backNum = phone_number.slice(-4);
  return frontNum + backNum;
}

function hideNumbers2(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
  // /(\d)/g 모든 숫자를 찾는것에서, (?=\d{4}) 하위식 추가 ?= 끝에서부터 4글자는 *로 대체하는 로직인듯(부채)
}

console.log(hideNumbers("01033334444"));
console.log(hideNumbers("027778888"));
console.log(hideNumbers2("01033334444"));
console.log(hideNumbers2("027778888"));