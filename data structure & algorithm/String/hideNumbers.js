function hideNumbers(phone_number) {
  const frontNum = phone_number.slice(0, phone_number.length - 4).replace(/(\d)/g, "*");
  const backNum = phone_number.slice(-4);
  return frontNum + backNum;
}

// 번호중 뒷네자리수를 제외하고 2개로 나눠서 앞을 변경한뒤 뒤와 합치면서 반환

console.log(hideNumbers("01033334444"));
console.log(hideNumbers("027778888"));