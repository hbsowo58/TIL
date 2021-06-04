// 천단위마다 끈는로직

const number = 1000;
const secondNumber = 1000000;

const option = {
    maximumFractionDigits: 4
};

// 1. regular expression
console.log(secondNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))

// 2 prototype method (option default local)
console.log(number.toLocaleString('ko-KR'));

// decimal point change
console.log(secondNumber.toLocaleString('ko-KR', option))

