process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  let result = "";
  for (var j = 0; j < b; j++) {
    for (var i = 0; i < a; i++) {
      result += "*";
    }
    result += "\n";
  }
  console.log(result);
});
