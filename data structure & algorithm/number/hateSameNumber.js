/* eslint-disable indent */
function hateSameNumber(arr) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) answer.push(arr[i]);
  }
  return answer;
}

//반복문을 돌면서 뒷 인덱스랑 비교해서 답배열에 푸쉬



console.log(hateSameNumber([1, 1, 3, 3, 0, 1, 1]));
console.log(hateSameNumber([4, 4, 4, 3, 3]));