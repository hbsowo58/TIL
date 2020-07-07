function sumOfDivisor(n) {
  let answer = 0;

  if (n < 0 || n > 3000) {
    return false
  };

  for (let i = 0; i * i <= n; i++) {
    if (n % i === 0) {
      answer += i + (n / i);
    }
    if (i * i === n) {
      answer -= i;
    }
  }
  return answer;
}

//최대한 반복문을 적게 돌리기 위해 약수를 구하는 로직은 배수의 합 공식 적용
//문제는 9나 25같이 로직에 두번 더해지는 경우 한번을 차감

console.log(sumOfDivisor(0));
console.log(sumOfDivisor(12));
console.log(sumOfDivisor(5));
console.log(sumOfDivisor(3000));
console.log(sumOfDivisor(3001));
console.log(sumOfDivisor(1));
console.log(sumOfDivisor(9));
console.log(sumOfDivisor(25));