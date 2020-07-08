function stringDescending(s) {
  return s.split("").sort().reverse().join("");
}

// 내림차순 정렬을 sort 메 서드로 할 예정이었고 대소문자를 어떻게 접근할 것인가 고민하였는데
// sort 메 서드는 배열 내장 메서드라 문자열을 배열화 시키는 과정이 필요했다 split으로 배열로 한 글자 한 글자 나눈 뒤
// 이를 정렬하니 디폴트 값인 오름차순으로 되었다. 이를 뒤집었더니 대소문자 고민할 필요 없이 조건과 동일하게 나온 후
// 배열을 다시 join을 통해 문자열로 변경하였다

console.log(stringDescending("Zbcdefg"));