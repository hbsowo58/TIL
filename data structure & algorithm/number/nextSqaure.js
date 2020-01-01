function nextSqaure(n) {
  return Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : -1
}

// 생각대로 풀림 제곱근 판별하는 Math.sqrt 메서드, 제곱 만들 수 있는 Math.pow 메 서드의 사용법과
// 정수인지 확인할 수 있는 isInteger나 parseInt로 강제형 변환 시키면 한 줄로 해결 가능하다

console.log(nextSqaure(121));
console.log(nextSqaure(3));