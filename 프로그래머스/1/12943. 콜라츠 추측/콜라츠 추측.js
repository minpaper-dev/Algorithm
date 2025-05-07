function solution(num) {
    if(num === 1) return 0
    
    let collatz = num
    let count = 0
    while(true) {
        
        if(collatz % 2) collatz = (collatz * 3) + 1
        else collatz = collatz / 2
        count ++
        if(collatz === 1) return count
        if(count === 500) return -1
    }
}