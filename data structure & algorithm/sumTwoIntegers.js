function sumTwoIntegers(a, b) {
  let answer = 0;
  if (a === b) {
    answer = a;
  }

  if (a > b) {
    for (let i = b; i <= a; i++) {
      answer += i;
    }
  } else if (b > a) {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  }

  return answer;
}

console.log(sumTwoIntegers(3, 5));
console.log(sumTwoIntegers(3, 3));
console.log(sumTwoIntegers(5, 3));
console.log(sumTwoIntegers(-5, 3));
console.log(sumTwoIntegers(5, -3));
console.log(sumTwoIntegers(-5, -3));
console.log(sumTwoIntegers(0, -3));