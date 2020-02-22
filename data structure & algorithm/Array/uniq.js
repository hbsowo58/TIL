function uniq(array) {
  return [...new Set(array)];

  // return array.filter((v, i, self) => self.indexOf(v) === i);
}

console.log(uniq([2, 1, 2, 3, 4, 3, 4])); // [ 2, 1, 3, 4 ]