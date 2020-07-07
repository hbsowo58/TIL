function mockExam(answers) {
  const answer = [];

  const student1 = [1, 2, 3, 4, 5];
  const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let Cnt1 = 0;
  let Cnt2 = 0;
  let Cnt3 = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i % answers.length] === student1[i % student1.length]) {
      Cnt1++;
    }
    if (answers[i % answers.length] === student2[i % student2.length]) {
      Cnt2++;
    }
    if (answers[i % answers.length] === student3[i % student3.length]) {
      Cnt3++;
    }
  }
  const maxCnt = Math.max(Cnt1, Cnt2, Cnt3);
  if (Cnt1 === maxCnt) {
    answer[answer.length] = 1;
  }
  if (Cnt2 === maxCnt) {
    answer[answer.length] = 2;
  }
  if (Cnt3 === maxCnt) {
    answer[answer.length] = 3;
  }

  return answer;
}

function mockExam2(answers) {
  const answer = [];
  const student1 = [1, 2, 3, 4, 5];
  const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const Cnt1 = answers.filter((a, i) => a === student1[i % student1.length]).length;
  const Cnt2 = answers.filter((a, i) => a === student2[i % student2.length]).length;
  const Cnt3 = answers.filter((a, i) => a === student3[i % student3.length]).length;
  const max = Math.max(Cnt1, Cnt2, Cnt3);

  if (Cnt1 === max) {
    answer.push(1);
  }
  if (Cnt2 === max) {
    answer.push(2);
  }
  if (Cnt3 === max) {
    answer.push(3);
  }
  return answer;
}

// filter 메서드를 통해 비교하고자 하는 원본 배열과, 비교 대상 배열의 원소들을 비교
// mockExam의 포인트는 i % 배열의 length
// 0 % 5 = 0
// 1 % 5 = 1
// 2 % 5 = 2
// 3 % 5 = 3
// 4 % 5 = 4
// 5 % 5 = 0
// 6 % 5 = 1 ... 반복 들어오는 배열의 개수를 알 수 없기 때문

console.log(mockExam([1, 2, 3, 4, 5]));
console.log(mockExam([3, 3, 3, 2, 5]));
console.log(mockExam2([1, 2, 3, 4, 5]));
console.log(mockExam2([3, 3, 3, 2, 5]));