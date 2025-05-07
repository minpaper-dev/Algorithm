function solution(numbers) {
    const answer = 45 - numbers.reduce((acc, num) => acc + num, 0)
    return answer
}