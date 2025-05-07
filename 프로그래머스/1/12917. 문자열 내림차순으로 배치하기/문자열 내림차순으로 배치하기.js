function solution(s) {
    const array = s.split('')
    const answer = array.sort((a,b) => b.charCodeAt(0) - a.charCodeAt(0)).join('')
    
    return answer
}