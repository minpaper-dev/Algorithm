function solution(brown, yellow) {
    const sqrt = Math.sqrt(yellow) 
    const total_count = brown + yellow
    let width = 0
    let height = 0
    
    for(let i = 1; i<=sqrt; i++){
        if(yellow % i === 0) {
            width = (yellow / i) + 2
            height = i + 2
            
            if(width * height === total_count) break;
        }
    }
    
    return [width, height]
}