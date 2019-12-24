function caesar(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    let ascilCode = s[i].charCodeAt();

    if (ascilCode >= 65 && ascilCode <= 90) {
      //대문자면
      let change = ascilCode + n;
      change > 90 ? (change = change - 26) : change;
      answer += String.fromCharCode(change);
    }
    if (ascilCode >= 97 && ascilCode <= 122) {
      // 소문자면
      let change = ascilCode + n;
      change > 122 ? (change = change - 26) : change;
      answer += String.fromCharCode(change);
    }

    if (s[i] === " ") {
      answer += " ";
    }
  }
  return answer;
}

console.log(caesar("AB", 1));
console.log(caesar("z", 1));
console.log(caesar("a B z", 1));
