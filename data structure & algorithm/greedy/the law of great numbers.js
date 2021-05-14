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

