function Dolldrawing(board, moves) {
  const movesLen = moves.length;
  const stack = [];
  let res = 0;
  for (let i = 0; i < movesLen; i++) {
    let num = moves.shift() - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][num] !== 0) {
        if (stack[stack.length - 1] === board[j][num]) {
          res = res + 2;
          stack.pop();
        } else {
          stack.push(board[j][num]);
        }
        board[j][num] = 0;
        break;
      }
    }
  }
  return res;
}

console.log(
  Dolldrawing(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
