function year2016(a, b) {
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const date = new Date(2016, (a - 1), b).getDay();
  return day[date];
}
//실제 년도 요일을 사용하여 Date 생성자 함수를 통해 미리 정해진 요일에서 가져오는방식 제일먼저 떠올린방법

console.log(year2016(5, 24));
console.log(year2016(1, 1));