function getDistance(goalPosition, fingerPosition) {
  const distance = Math.abs(goalPosition - fingerPosition);
  return parseInt(distance / 3 + (distance % 3));
}

const move = (num) => num;

const makeResult = (res, finger) => {
  return (res += finger);
};

function keyPadPress(numbers, hand) {
  const priorityHand = hand[0].toUpperCase();
  const leftKey = [1, 4, 7];
  const rightKey = [3, 6, 9];

  let leftFingerPosition = 10; // 왼손 * 시작 = 10
  let rightFingerPosition = 12; //오른손 # 시작 = 12
  let res = "";

  for (let num of numbers) {
    if (leftKey.includes(num)) {
      leftFingerPosition = move(num);
      res = makeResult(res, "L");
    } else if (rightKey.includes(num)) {
      rightFingerPosition = move(num);
      res = makeResult(res, "R");
    } else {
      if (num === 0) {
        num = 11; //0 = 11
      }
      const leftDistance = getDistance(num, leftFingerPosition);
      const rightDistance = getDistance(num, rightFingerPosition);
      if (leftDistance === rightDistance) {
        res += priorityHand;
        priorityHand === "R"
          ? (rightFingerPosition = move(num))
          : (leftFingerPosition = move(num));
      } else {
        leftDistance > rightDistance
          ? ((rightFingerPosition = move(num)), (res = makeResult(res, "R")))
          : ((leftFingerPosition = move(num)), (res = makeResult(res, "L")));
      }
    }
  }
  return res;
}

console.log(keyPadPress([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
console.log(keyPadPress([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));
console.log(keyPadPress([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"));

//키패드를 누르는데 필요한 거리를 구하는 함수 getDistance

//keyPad함수는 눌릴 keyPad와 같은 가중치일때 사용하는 주손을 입력받음

//키패드는 크게 12가지 0~9 , * #

// [1,4,7,*]은 왼손사용, [3,6,9,#]은 오른손사용, 즉 [2,5,8,10]만 어떤 손을 사용할지 정하면 됨

//최초 시작점인 *와 #은 한번만 사용되기 때문에 Key배열에 들어가지 않아도되며 0은 11로 대체

//들어오는 입력키패드의 수를 보며 [1,4,7] leftKey 또는 [3,6,9] rightKey속하게 된다면, 손가락 이동 및 결과에 누적

//속하지않는 [2,5,8,0]의 경우 현재 손가락의 위치에서 목적지까지의 가중치 계산하여 변수화

//가중치가 같은경우 자신의 주 손가락 결과에 누적 및 주손가락 이동

//가중치가 다른경우, 가중치가 작은쪽으로 손가락 위치 및 결과값 누적
