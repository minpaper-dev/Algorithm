function solution(s) {
    const answer = []
    const arr = s.split(' ')
    for(let i of arr){
        answer.push(getUpperCase(i))
    }
    
    return answer.join(' ')
    
}
            
const getUpperCase = (str) => {
    return [...str].map((item, index) => index ? item.toLowerCase() : item.toUpperCase()).join('')
    }