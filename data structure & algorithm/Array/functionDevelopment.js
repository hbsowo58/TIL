function solution(progresses, speeds) {
  // console.log(progresses, speeds);
  let answer = [];

  // console.log(progresses[0] <= 100); //progresses[0] =< 100 이면

  while (speeds.length > 0) {
    for (let i = 0; i < speeds.length; i++) {
      if (progresses[i] < 100) {
        progresses[i] = progresses[i] + speeds[i];
      }
    }
    let cnt = 0;
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      cnt++;
    }
    if (cnt > 0) {
      answer.push(cnt);
    }
  }

  // console.log(progresses, cnt);

  // for (let i = 0; i < progresses.length; i++) {
  //   progresses[i] = progresses[i] + speeds[i];
  // } 이걸 100보다 클때까지 수행해.

  //아니면

  // progresses.shift();
  // speeds.shift();
  // cnt = cnt +1; 이작업을해

  //작업이 다끝났으면, answer에 넣고,

  //그전에 했던 작업을 반복해

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
