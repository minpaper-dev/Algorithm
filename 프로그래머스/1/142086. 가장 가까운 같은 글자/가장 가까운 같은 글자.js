function solution(s) {
    const stack = []
    const answer = []
    
    for(let i of s){
        if(stack.lastIndexOf(i) === -1) answer.push(-1)
        else answer.push(stack.length - stack.lastIndexOf(i))
        stack.push(i)
    }
    
    return answer
    
}