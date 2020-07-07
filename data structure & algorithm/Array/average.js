function average(arr) {
  var answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer / arr.length;
}

function average2(array) {
  return array.reduce((a, b) => a + b) / array.length;
}
//배열 고차함수 reduce를 통한 가독성 및 성능 향상

console.log(average([1, 2, 3, 4]));
console.log(average([5, 5]));