function solution(n) {
    console.log(getNumber(n))
    var answer = getNumber(n).reduce((acc, num) => acc + num, 0);
    return answer;
}

const getNumber = (n) => {
    const set = new Set()
    
    for(let i = 1; i <= Math.sqrt(n); i++){
        if(n % i === 0) {
            set.add(i)
            set.add(n / i)
        } 
    }
    return Array.from(set).sort((a, b) => a - b)
}