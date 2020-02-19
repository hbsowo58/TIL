function findDuplicated(array) {
  return array.filter((v, i, self) => self.indexOf(v) !== i);
}

console.log(findDuplicated([1, 2, 3, 4, 1, 2, 3])); // [ 1, 2, 3 ]
console.log(findDuplicated([1, 2, 2, 3, 2, 2, 3])); // [ 2, 2, 2, 3 ]