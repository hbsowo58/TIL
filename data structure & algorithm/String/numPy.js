/* eslint-disable indent */
function numPy(s) {
  if (s.match(/p/gi) === null && s.match(/y/gi) === null) {
    return true;
  }
  if (s.match(/p/gi) === null || s.match(/y/gi) === null) {
    return false;
  }
  return s.match(/p/gi).length === s.match(/y/gi).length;
}

// 맨 처음 작성한 코드 방어 코드 없이 작성했을 때 1,2에는 문제가 없었으나 3에서 문제 발생
// 첫 번째 if 문으로 방어 코드 작성
// 그러나 4,5번처럼 둘 중 하나는 존재하고 나머지 한 개는 존재하지 않는 경우에도 false라 추가 방어 코드 추가

console.log(numPy("pPoooyY")); // 1
console.log(numPy("Pyy")); //2
console.log(numPy("abc")); //3
console.log(numPy("p")); //4
console.log(numPy("yY")); //5
