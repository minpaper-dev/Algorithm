function solution(n, times) {
    times.sort((a,b) => a - b)
    let answer = 0
    
    let min = 1
    let max = times[times.length - 1] * n
    
    while(min <= max){
        let mid = Math.floor((min + max) / 2)
        let total = times.reduce((acc, num) => acc + Math.floor(mid / num), 0)
        
        if(total >= n) {
            answer = mid    
            max = mid - 1
        }
        else min = mid + 1
    }
    return answer
}