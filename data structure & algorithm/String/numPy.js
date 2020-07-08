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

// 방어 코드 없이 작성했을 때 1,2에는 문제가 없었으나 3에서 문제 발생
// 첫 번째 if 문으로 방어 코드 작성
// 그러나 4,5번처럼 둘 중 하나는 존재하고 나머지 한 개는 존재하지 않는 경우에도 false라 추가 방어 코드 추가

function numPy2(s) {
  return (s.match(/p/gi) || []).length === (s.match(/y/gi) || []).length;
}

// 방어코드를 줄이기 위해 null이 들어올때를 구분, 단축평가를 통한 match의 결과가 null인경우 빈배열의 length 프로퍼티를 보아
// 둘다없을때 true, 하나라도 있는데 차이가 나면 false이고 어떠한값에 결과가 없으면 0으로 평가

console.log(numPy("pPoooyY")); // 1
console.log(numPy("Pyy")); //2
console.log(numPy("abc")); //3
console.log(numPy("p")); //4
console.log(numPy("yY")); //5
console.log(numPy2("pPoooyY"));
console.log(numPy2("Pyy"));
console.log(numPy2("abc"));
console.log(numPy2("p"));
console.log(numPy2("yY"));