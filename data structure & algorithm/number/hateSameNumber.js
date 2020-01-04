function hateSameNumber(arr) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) answer.push(arr[i]);
  }
  return answer;
}

// 반복문을 돌면서 다음 인덱스랑 비교해서 답 배열에 푸시

function hateSameNumber2(arr) {
  return arr.filter((ele, i) => ele !== arr[i + 1]);
}

// 배열의 고차 함수 사용, 각 인덱스와 그다음 인덱스를 비교해서 같지 않은 애들만 새로 만들어 리턴

console.log(hateSameNumber([1, 1, 3, 3, 0, 1, 1]));
console.log(hateSameNumber([4, 4, 4, 3, 3]));
console.log(hateSameNumber2([1, 1, 3, 3, 0, 1, 1]));
console.log(hateSameNumber2([4, 4, 4, 3, 3]));