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

console.log(mockExam([1, 2, 3, 4, 5]));
console.log(mockExam([3, 3, 3, 2, 5]));