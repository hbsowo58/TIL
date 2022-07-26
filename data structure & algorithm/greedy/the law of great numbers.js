function numbers(input){
    const inputArr = input.split("\n")
    let n = +inputArr[0].split(" ")[0]
    let m = +inputArr[0].split(" ")[1]
    let k = +inputArr[0].split(" ")[2]
    const arr = inputArr[1].split(" ").sort();
    
    const first = +arr[n-1]
    const second = +arr[n-2]
    let result = 0;


    // while(true){
    //     for(let i = 0; i < k; i++){
    //         if(m === 0) break;
    //         result = result + first
    //         m -= 1;
    //     }
    //     if(m === 0) break;

    //     result += second;
    //     m -= 1;
    // }

    count = parseInt(m / (k+1) *k)
    count += m % (k+1);

    result += count * first;
    result += (m - count) * second

    return result;
}

console.log(numbers("5 8 3 \n2 4 5 4 6"))

function numbersTwo(){
    let result = 0
    const arr = [2,4,5,4,6]
    const input = '5 8 3'

    const sliptInput = input.split(' ')

    const N = sliptInput[0]
    const M = sliptInput[1]
    const K = sliptInput[2]



    function solution(){
        // 배열안에 가장 큰 값을 찾는다
        const Max = Math.max(...arr)

        // Max값의 인덱스를 찾아 삭제한다
        const index = arr.indexOf(Max)
        arr.splice(index, 1)

        // 세컨드 값을 찾는다.
        const second = Math.max(...arr)

        // M값은, k+1을 반복한 횟수만큼 나온다.
        const mul = M/(Number(K)+1)

        // 나머지를 구한다
        const mod = M - (Number(K)+1) * mul

        // 반복회수 * max값 * k +    두번째값 * 반복회수 + 나머지 * max값
        result = (Max * K * mul) + (second * mul) + Max * mod

        return result
    }

    console.log(solution())
}