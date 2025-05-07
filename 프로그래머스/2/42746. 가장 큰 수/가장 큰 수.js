function solution(numbers) {
    const arr = numbers.map((item) => String(item))
    
    const answer = arr.sort((a,b) => (b + a) - (a + b))
    return answer[0] === '0' ? '0' : answer.join('')
}