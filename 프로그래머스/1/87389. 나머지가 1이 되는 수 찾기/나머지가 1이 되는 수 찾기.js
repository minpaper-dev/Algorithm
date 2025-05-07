function solution(n) {
    if(n % 2) return 2
    else {
        for(let i = 3; i<n;i ++){
            if(n % i === 1) return i
        }
    }
}