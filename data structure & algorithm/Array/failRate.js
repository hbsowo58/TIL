function failRate(N, stages) {
  let answer = [];
  let length = stages.length;

  for (let i = 1; i <= N; i++) {
    const len = stages.filter((e) => e === i).length;
    if (len === 0) {
      answer.push({ stage: i, failrate: 0 });
    } else {
      answer.push({ stage: i, failrate: len / length });
      length -= len;
    }
  }

  answer.sort((a, b) => {
    if (b.failrate === a.failrate) {
      return a.stage - b.stage;
    }
    return b.failrate - a.failrate;
  });
  return answer.map((e) => e.stage);
}

console.log(failRate(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(failRate(4, [4, 4, 4, 4, 4]));
