function solution(left, right) {
    
    let answer = 0;
    
    for(let i = left; i <= right; i++){
        
        getIsEven(i) ? answer += i : answer -= i
    }
    
    return answer;
}


// 약수의 개수가 짝수인지 판별하는 함수
const getIsEven = (number) => {
    const sqrt = Math.ceil(Math.sqrt(number)) 
    const count = new Set()
    
    for(let i = 1; i<=sqrt; i++){
        if(number % i === 0 ){
            
            count.add(i)
            count.add(number / i)
        }
    }
    
    return Array.from(count).length % 2 === 0 ? true : false
   
}