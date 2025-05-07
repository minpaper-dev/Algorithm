function solution(prices) {
    const arr = Array(prices.length).fill(0)
    
    for(let i = 0; i<prices.length; i++){
        for(let j = i + 1; j <prices.length; j++){
            
            if(prices[i] > prices[j]) {
                arr[i] = j - i
                break
            }
        }
        if(arr[i] === 0) arr[i] = (prices.length - i) - 1
    }
    return arr
}