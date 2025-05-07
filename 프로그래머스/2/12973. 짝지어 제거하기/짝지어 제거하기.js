function solution(s) {
    
    
    const stack = []
    
    for(let i of s){
        if(stack.length && stack[stack.length - 1] === i) stack.pop()
        else stack.push(i)
    }
    
    return !stack.length ? 1 : 0
}