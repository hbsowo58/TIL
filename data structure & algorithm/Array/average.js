function average(arr) {
  var answer = 0;
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer / arr.length;
}

console.log(average([1, 2, 3, 4]));
console.log(average([5, 5]));