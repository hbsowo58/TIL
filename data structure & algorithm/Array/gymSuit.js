function gymSuit(n, lost, reserve) {
  let copylost = lost.concat();
  let copyreserve = reserve.concat();

  lost.forEach((e) =>
    reserve.forEach((x) => {
      if (e === x) {
        lost = lost.filter((y) => y !== e);
        copylost = lost.filter((y) => y !== e);
        reserve = reserve.filter((y) => y !== e);
        copyreserve = reserve.filter((y) => y !== e);
      }
    })
  );
  // lost 배열과 reserve 배열의 원소들을 각각 비교하여 같은게 있으면 필터링하여 lost와 reserve에 재할당한후 복사본을 만든다

  for (let i = 0; i < lost.length; i++) {
    const rend1 = lost[i] - 1;
    const rend2 = lost[i] + 1;
    if (copyreserve.includes(rend1)) {
      copylost = copylost.filter((e) => e !== lost[i]);
      copyreserve = copyreserve.filter((e) => e !== rend1);
    } else if (copyreserve.includes(rend2)) {
      copylost = copylost.filter((e) => e !== lost[i]);
      copyreserve = copyreserve.filter((e) => e !== rend2);
    }
  }
  return n - copylost.length;
}

// 1. 반환하고자 하는 값은 매개변수 n에서 lost의 length를 뺀값이다.
// 2. lost 배열의 원소의 +1, -1를 reserve 배열의 원소랑 비교해서 있으면 제거한다
// 3. 제거하니 원본 배열을 건들여서 복사본을 만들어서 작업을 진행하였다 (반복문에서 문제발생)
// 4. 작업을 진행하다보니 1~3작업보다 선행되야될 작업이 lost의 원소중 reserve의 원소와 같은게 있는지 보는거였다
// 5. 그래서 크게 두파트로 나누어 임시작성하게되었다 (가독성 및 성능 고려x);

function gymSuit2(n, lost, reserve) {
  lost.filter((lostNum) => {
    if (reserve.find((reserveNum) => lostNum === reserveNum)) {
      reserve = reserve.filter((e) => e !== lostNum);
      lost = lost.filter((e) => e !== lostNum);
    }
  });
  return (
    n -
    lost.filter((lostNum) => {
      const lend = reserve.find(
        (reserveNum) => Math.abs(reserveNum - lostNum) <= 1
      );
      if (!lend) return true;
      reserve = reserve.filter((reserveNum) => reserveNum !== lend);
    }).length
  );
}

// 다른 코드에서 영감을 받아 리팩토링, 고차 함수를 사용해서 사본을 만들지 않고도 작업할 수 있다
// 전체적인 맥락은 가져가되, 우선순위 변경
// 1 결괏값은 n - lost.length;
// 2여 분을 가져왔으나 분실한 학생을 먼저 걸러낸다.
// 3 lost 변경은 reserve에서 +-1로 학생들을 필터링한다.

console.log(gymSuit(5, [2, 4], [1, 3, 5]));
console.log(gymSuit(5, [2, 4], [3]));
console.log(gymSuit(3, [3], [1]));
console.log(gymSuit(5, [2, 3], [3, 4]));
console.log(gymSuit(3, [3], [3]));
console.log(gymSuit(5, [3], [2, 3]));
console.log(gymSuit(5, [3], [2, 4]));
console.log(gymSuit(5, [3], []));
console.log(gymSuit(5, [], [4]));
console.log(gymSuit(0, [], [4]));
console.log(gymSuit(3, [2, 3], [1]));
console.log(gymSuit(18, [7, 8, 11, 12], [1, 6, 8, 10]));
console.log(gymSuit(5, [2, 4, 5], [1, 4]));
console.log(gymSuit(5, [2, 3, 5], [2, 4]));
console.log(gymSuit(10, [3, 9, 10], [3, 8, 9]));

console.log(gymSuit2(5, [2, 4], [1, 3, 5]));
console.log(gymSuit2(5, [2, 4], [3]));
console.log(gymSuit2(3, [3], [1]));
console.log(gymSuit2(5, [2, 3], [3, 4]));
console.log(gymSuit2(3, [3], [3]));
console.log(gymSuit2(5, [3], [2, 3]));
console.log(gymSuit2(5, [3], [2, 4]));
console.log(gymSuit2(5, [3], []));
console.log(gymSuit2(5, [], [4]));
console.log(gymSuit2(0, [], [4]));
console.log(gymSuit2(3, [2, 3], [1]));
console.log(gymSuit2(18, [7, 8, 11, 12], [1, 6, 8, 10]));
console.log(gymSuit2(5, [2, 4, 5], [1, 4]));
console.log(gymSuit2(5, [2, 3, 5], [2, 4]));
console.log(gymSuit2(10, [3, 9, 10], [3, 8, 9]));
