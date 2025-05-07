function solution(d, budget) {
    d.sort((a,b) => a - b)
    
    let answer = 0
    
    for(let i of d) {
        budget -= i
        if(budget < 0) break;
        answer ++
    }
    return answer
}