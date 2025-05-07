function solution(s) {
    const arr_s = s.split(' ')
    const answer = []
    
    for(let i = 0; i<arr_s.length; i++){
        let str = ''
        for(let j = 0; j<arr_s[i].length; j++){
            if(j % 2) str += arr_s[i][j].toLowerCase() 
            else str += arr_s[i][j].toUpperCase()
        }
        answer.push(str)
    }
    
    return answer.join(' ')
}