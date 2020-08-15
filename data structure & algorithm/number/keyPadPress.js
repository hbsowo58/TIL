function getDist(n, h) {
  const t = Math.abs(n - h);
  return parseInt(t / 3 + (t % 3));
}

function keyPadPress(numbers, hand) {
  let flag = "";
  hand === "right" ? (flag = "R") : (flag = "L");

  const len = numbers.length;
  const leftKey = [1, 4, 7];
  const rightKey = [3, 6, 9];
  let leftPosition = 10;
  let rightPosition = 12;
  let res = "";

  for (let i = 0; i < len; i++) {
    if (leftKey.includes(numbers[i])) {
      leftPosition = numbers[i];
      res += "L";
    } else if (rightKey.includes(numbers[i])) {
      rightPosition = numbers[i];
      res += "R";
    } else {
      // 2,5,8,10의 경우
      //가야되는수 numbers[i],
      if (numbers[i] === 0) {
        numbers[i] = 11;
      }
      let ld = getDist(numbers[i], leftPosition);
      let rd = getDist(numbers[i], rightPosition);
      console.log(ld, rd);
      if (ld === rd) {
        res += flag;
        flag === "R"
          ? (rightPosition = numbers[i])
          : (leftPosition = numbers[i]);
      } else if (ld < rd) {
        res += "L";
        leftPosition = numbers[i];
      } else {
        res += "R";
        rightPosition = numbers[i];
      }
    }
  }
  return res;
}

console.log(keyPadPress([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));
console.log(keyPadPress([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
console.log(keyPadPress([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"));
