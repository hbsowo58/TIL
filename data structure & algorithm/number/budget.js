function budget(d, budget) {
  let answer = 0;
  let sum = 0;
  d.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < d.length; i++) {
    sum = sum + d[i];
    answer = answer + 1;
    if (sum > budget) {
      answer = answer - 1;
      break;
    }
  }
  return answer;
}

console.log(budget([1, 3, 2, 5, 4], 9));
console.log(budget([2, 2, 3, 3], 10));
