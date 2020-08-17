function pull2Add(numbers) {
  const answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  return [...new Set(answer)].sort(function (a, b) {
    return a - b;
  });
}

//배열의 원소들을 '각각'더한 후 중복을 제거하여 오름차순으로 출력
