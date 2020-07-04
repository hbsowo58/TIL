function sumTwoIntegers(a, b) {
  let answer = 0;
  if (a === b) {
    answer = a;
  }

  if (a > b) {
    for (let i = b; i <= a; i++) {
      answer += i;
    }
  } else if (b > a) {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  }

  return answer;
}

// a, b가 같은지를 먼저 확인하고, 같지 않으면 a가 큰지 b가 큰지에 따라 1씩 늘려가며 최솟값부터 최댓값까지 누적한다

function sumTwoIntegers2(a, b) {
  let sum = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sum += i;
  }
  return sum;
}

// 애초에 반복문 한 개짜리로 해결할 수 있는 문제였다 최솟값 최댓값을 구하면 된다
// 조건을 크거나 같다로 하고 누적하면 같은 경우 한 번은 더해지기 때문에 동일한 숫자까지 출력된다

function sumTwoIntegers3(a, b) {
  return (a + b) * ((Math.abs(b - a) + 1) / 2);
}

// 댓글에 가우스의 재림이라고 평가받은 풀이. 수학적인 생각이 필요한 것 같다. 두 정수 사이의 누적된 합을 구하는 방법
// ex 3,5 = 8 * (3) / 2 abs 메 서드를 사용하여 절댓값으로 계산하기 때문에 음수 연산도 가능



console.log(sumTwoIntegers(3, 5));
console.log(sumTwoIntegers(5, 3));
console.log(sumTwoIntegers(3, 3));
console.log(sumTwoIntegers2(3, 5));
console.log(sumTwoIntegers2(5, 3));
console.log(sumTwoIntegers2(3, 3));
console.log(sumTwoIntegers3(3, 5));
console.log(sumTwoIntegers3(5, 3));
console.log(sumTwoIntegers3(3, 3));
console.log(sumTwoIntegers3(5, 3));
console.log(sumTwoIntegers3(-5, 3));
console.log(sumTwoIntegers3(5, -3));
console.log(sumTwoIntegers3(-5, -3));
console.log(sumTwoIntegers3(0, -3));