const nums = [1,2,3,4];
const r = 3;

const combination = (arr, k) => {
    const answer = [];
    const comb = [...Array(k)].fill(0);
    backTracking(answer, comb, arr, k, 0, 0);
    return answer;
};

const backTracking = (answer, comb, arr, k, idx, start) => {
    if (idx === k) {
        return answer.push([...comb]);
    }
    
    for (let i=start; i<arr.length; i++) {
        comb[idx] = arr[i];
        backTracking(answer, comb, arr, k, idx+1, i+1);
    }
}

const trialDivision = (number) => {
    // Check if number is integer.
    if (number % 1 !== 0) {
        return false;
    }

    if (number <= 1) {
        // If number is less than one then it isn't prime by definition.
        return false;
    }

    if (number <= 3) {
        // All numbers from 2 to 3 are prime.
        return true;
    }

    // If the number is not divided by 2 then we may eliminate all further even dividers.
    if (number % 2 === 0) {
        return false;
    }

    // If there is no dividers up to square root of n then there is no higher dividers as well.
    const dividerLimit = Math.sqrt(number);
    for (let divider = 3; divider <= dividerLimit; divider += 2) {
        if (number % divider === 0) {
        return false;
        }
    }

    return true;
}

const numCombination = combination(nums, r)

console.log(numCombination)

const sumOfNum = numCombination.map(e => e).map(el => el.reduce((acc,cur) => acc + cur))

console.log(a)

console.log(sumOfNum.map(e => trialDivision(e)).reduce((acc,cur) => {
    if(cur === true) {
        acc = acc + 1
    }
    return acc}
,0)) 