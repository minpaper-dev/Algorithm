function solution(s) {
    return getTask1(s) && getTask2(s)
}

const getTask1 = (s) => {
    if (s.length === 4 || s.length === 6) return true
    else return false
}

const getTask2 = (s) => {
    for(let i = 0; i<s.length; i++){
        if(!Number.isInteger(+s[i])) return false
    }
    
    return true
}