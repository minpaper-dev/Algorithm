function solution(n) {
    const num_3 = n.toString(3)
    const reverse = [...num_3].reverse().join('')
    
    return parseInt(reverse, 3)
}