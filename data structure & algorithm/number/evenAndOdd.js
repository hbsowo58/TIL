function evenAndOdd(num) {
  var answer = "";
  num % 2 === 0 ? (answer = "Even") : (answer = "Odd");
  return answer;
}

console.log(evenAndOdd(0));
console.log(evenAndOdd(1));
console.log(evenAndOdd(2));