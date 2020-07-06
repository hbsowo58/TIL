function makeSetSort(arr) {
  return arr
    .reduce((acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]), [])
    .sort();
}

function sum(base, other) {
  return makeSetSort(base.concat(other));
}

function complement(base, other) {
  return base.filter((x) => !other.includes(x));
}

function intersect(base, other) {
  return base.filter((x) => other.includes(x));
}

function set(arr1, arr2) {
  const answer = [];
  const setArr1 = makeSetSort(arr1);
  const setArr2 = makeSetSort(arr2);
  const sumArr = sum(setArr1, setArr2);
  const comArr = complement(setArr1, setArr2);
  const interArr = intersect(setArr1, setArr2);

  answer.push(makeSetSort(arr1).length);
  answer.push(setArr2.length);
  answer.push(sumArr.length);
  answer.push(comArr.length);
  answer.push(interArr.length);

  return answer;
}

console.log(set([1, 2, 3, 2], [1, 3]));
console.log(set([2, 3, 4, 3, 5], [1, 6, 7]));
console.log(set([1, 3, 4, 3, 5], []));