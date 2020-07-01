function waterMelon(n) {
  let answer = "";
  const singleString = "수";
  const doubleString = "수박";
  if (n % 2 === 0) {
    for (let i = 0; i < n / 2; i++) {
      answer += doubleString;
    }
  } else {
    for (let i = 0; i < Math.floor(n / 2); i++) {
      answer += doubleString;
    }
    answer += singleString;
  }

  return answer;
}

console.log(waterMelon(0));
console.log(waterMelon(1));
console.log(waterMelon(2));
console.log(waterMelon(3));
console.log(waterMelon(4));
console.log(waterMelon(5));