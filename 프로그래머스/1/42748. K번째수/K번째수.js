function solution(array, commands) {
    const answer = []
    
    for(let i = 0; i < commands.length; i++){
        answer.push(getNumber(array, commands[i][0] - 1, commands[i][1],commands[i][2] - 1))
    }
    return answer
}

const getNumber = (arr, start, end, index) => {
    const returnArr = [...arr]
    return returnArr.splice(start , end - start).sort((a,b) => a - b)[index]
}