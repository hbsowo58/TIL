function isNotOverlapArray(array) {
  const temarr = [];
  const copyarr = array.sort();
  let ans;
  for (i = 0; i < array.length; i++) {
    temarr[i] = i + 1;
  }

  for (j = 0; j < array.length; j++) {
    ans = temarr[j] == copyarr[j];
  }
  return ans;
}

console.log(isNotOverlapArray([4, 1, 3, 2])); // true
console.log(isNotOverlapArray([4, 1, 3])); // false