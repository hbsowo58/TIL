process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  let result = "";
  for (let j = 0; j < b; j++) {
    for (let i = 0; i < a; i++) {
      result += "*";
    }
    result += "\n";
  }
  console.log(result);
});

// 별 찍기 이중 포문으로 작성

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  const row = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(row);
  }
});

//행을 a의 개수만큼 *을 찍고, b의 개수만큼 행을 출력하라는 이중 포문 안 쓰고 해결한 방법
