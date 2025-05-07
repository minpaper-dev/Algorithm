function solution(x) {
    const total = String(x).split('').reduce((acc,num)=> acc + Number(num), 0)
    return x % total === 0 ? true : false
}