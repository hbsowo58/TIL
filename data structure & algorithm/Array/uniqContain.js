function uniqContain(arr) {
  const len = arr.length;
  let result = new Set(arr).size !== arr.length;
  // new Set(iterable)하여 Set객체를 만든후
  // Set 객체의 길이와 원본 배열의 길이를 비교
  // 중복이 있는지 확인, 중복되면 포함로직으로 가지않음
  if (!result) {
    for (let i = 0; i < len - 1; i++) {
      for (let j = i + 1; j < len; j++) {
        arr[j].includes(arr[i]) ? result = true : arr[i].includes(arr[j]) ? result = true : result = false;
        // if (arr[j].includes(arr[i])) {
        //   result = true;
        // }
        // if (arr[i].includes(arr[j])) {
        //   result = true;
        // }
      }
    }
  }
  // 중복되는지 확인하였고 포함되는지 풀기
  // if문 두개 삼항조건연산자 두개로 합침
  return result;
}
console.log("1", uniqContain(["이순신", "홍길동", "세종대왕"]));
console.log("2", uniqContain(["봄", "여름", "가을", "겨울"]));
console.log("3", uniqContain(["봄", "여름", "봄봄", "겨울", "봄봄"]));
console.log("4", uniqContain(["가가", "나나", "다다"]));
console.log("5", uniqContain(["가나다", "나나", "나나나"]));
console.log("6", uniqContain(["가", "나나", "나"]));
console.log("6", uniqContain(["가나나", "나나", "나"]));