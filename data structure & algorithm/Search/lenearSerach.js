function linearSearch(array, target) {
  let res = -1;
  const {
    length
  } = array;
  for (let i = 0; i < length; i += 1) {
    if (array[i] === target) {
      res = array[i];
    }
  }
  return res;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6], 1)); // 1
console.log(linearSearch([1, 2, 3, 4, 5, 6], 3)); // 3
console.log(linearSearch([1, 2, 3, 4, 5, 6], 5)); // 5
console.log(linearSearch([1, 2, 3, 4, 5, 6], 6)); // 6
console.log(linearSearch([1, 2, 3, 4, 5, 6], -1)); // -1
console.log(linearSearch([1, 2, 3, 4, 5, 6], 0)); // -1
console.log(linearSearch([1, 2, 3, 4, 5, 6], 7)); // -1