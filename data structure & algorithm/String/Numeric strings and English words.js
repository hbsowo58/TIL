function solution(s) {
    if(s === "") return ""
    if(!isNaN(s)) return Number(s)
    const target = ["zero","one","two","three","four","five","six","seven","eight","nine"]

    for(let i = 0; i < target.length; i++){
        s = s.split(target[i]).join(i)
    }
    return Number(s)
}