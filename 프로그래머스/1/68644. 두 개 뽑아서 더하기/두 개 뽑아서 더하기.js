function solution(numbers) {
    numbers.sort((a,b) => a -b)
    console.log(numbers)
    const answer = new Set()
    
    for(let i = 0; i<numbers.length; i++){
        for(let j = i + 1; j < numbers.length; j++){
            answer.add(numbers[i] + numbers[j]) 
        }
    }
    
    return Array.from(answer).sort((a,b) => a - b)
}