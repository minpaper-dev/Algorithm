function solution(n) {
    if(n === 1) return '수'
    
    const str = '수박'
    const repeat_count = parseInt(n / 2) 
    return n % 2 ? `${str.repeat(repeat_count)}수` : str.repeat(repeat_count)
}