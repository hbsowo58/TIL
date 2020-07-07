/* eslint-disable indent */
function year2016(a, b) {
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const date = new Date(2016, (a - 1), b).getDay();
  return day[date];
}
// 실제 연도 요일을 사용하여 Date 생성자 함수를 통해 미리 정해진 요일에서 가져오는 방식 제일 먼저 떠올린 방법

function _year2016(a, b) {
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const date = new Date(`${a}, ${b}, 2016`).getDay();
  return day[date];
}

// ``백틱 사용한 스트링 인터폴레이션 방식으로 변경

function _2year2016(a, b) {
  const date = new Date(2016, (a - 1), b);
  return date.toString().slice(0, 3).toUpperCase();
}

// date 객체의 사용법을 안다면 문자열로 변경 후 앞에서 3글자 자른 후 대문자로 변경 date 객체에 대한 이해 필요


console.log(year2016(5, 24));
console.log(year2016(1, 1));
console.log(_year2016(5, 24));
console.log(_year2016(1, 1));
console.log(_2year2016(5, 24));
console.log(_2year2016(1, 1));