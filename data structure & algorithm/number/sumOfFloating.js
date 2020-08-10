function sumOfFloating(n) {
  const answer = [];
  let zeroStart = 0;

  if (n === 0) return ["0.0"];
  // return answer;
  // answer.push(n + "." + 0);
  // answer.push("0.0");

  do {
    for (let i = zeroStart; i < 10; i++) {
      answer.push(zeroStart + "." + i);
    }
    zeroStart++;
  } while (n > zeroStart);
  answer.push(n + "." + 0);
  return answer;
}

console.log(solution(1));
//[0.0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0]
console.log(solution(2));
//[0.0, '0.1', '0.2','0.3', '0.4', '0.5', '0.6','0.7', '0.8', '0.9', '1.0','1.1', '1.2', '1.3', '1.4','1.5', '1.6', '1.7', '1.8','1.9', '2.0']
console.log(solution(0));
console.log(solution(10));
