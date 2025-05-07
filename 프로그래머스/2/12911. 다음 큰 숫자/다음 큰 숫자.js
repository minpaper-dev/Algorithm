function solution(n) {
    const oneCount = getOneCount(n)
    let answer = 0
    
    for(let i = n + 1; i <= 1000000; i++){
        if(oneCount === getOneCount(i)) {
            answer = i
            break
        }
    }
    
    return answer
}

const getOneCount = (n) => {
    return [...n.toString(2)].filter((item) => item === '1').length
}