function sumDivisor(num) {
  let sum = 0;
  for (i = 1; i < num + 1; i++) {
    if (num % i == 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumDivisor(12)); // 28