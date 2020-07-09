function sumMatrix(arr1, arr2) {
  return arr1.map((a, i) => a.map((x, j) => x + arr2[i][j]));
}

// 1 첫 번째 배열의 원소를 map 함수로 돌면서 (i 인덱스 확인 0) 및 행에 접근
// 2 접근한 행을 다시 map 함수로 돌면서 행렬의 원소에 접근 (j 인덱스 0)
// 3 이 시점에서 행렬의 원소로 접근이 가능하므로 arr2에 [i][j]와 더해서 리턴

console.log(sumMatrix([
  [1, 2],
  [2, 3]
], [
  [3, 4],
  [5, 6]
]));
console.log(sumMatrix([
  [1],
  [2]
], [
  [3],
  [4]
]));