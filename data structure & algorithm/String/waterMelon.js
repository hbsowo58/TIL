function waterMelon1(n) {
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
// n이 들어온 숫자를 홀짝 판단하여 answer에 누적시키는 로직을 작성하였는데
// string.repeat 메 서드를 사용하면 성능을 높일 수 있을 것 같다.
// 사용법 str.repeat(count); 반복할 횟수

function waterMelon2(n) {
  const str = "수박";
  return str.repeat(n / 2) + (n % 2 === 1 ? "수" : "");
}

// str.repeat(n / 2) 홀수 짝수를 구분하여 수를 추가하여 붙인다 repeat의 매개변수가 정수가 아니면 버림 발생.

console.log(waterMelon1(0));
console.log(waterMelon2(0));
console.log(waterMelon2(1));
console.log(waterMelon2(2));
console.log(waterMelon2(3));
console.log(waterMelon2(4));
console.log(waterMelon2(5));