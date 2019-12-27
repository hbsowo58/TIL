// function delteMinNumber(arr) {
//   const min = Math.min.apply(null, arr);

//   arr.length > 1 ? arr.splice(arr.indexOf(min), 1) : (arr = [-1]);

//   return arr;
// } 아래로 합침

function delteMinNumber(arr) {
  arr.length > 1
    ? arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1)
    : (arr = [-1]);

  return arr;
}

console.log(delteMinNumber([4, 3, 2, 1]));
console.log(delteMinNumber([10]));
