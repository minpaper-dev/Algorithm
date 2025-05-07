function solution(s) {
    let zero_count = 0
    let change_count = 0
    let str = s
    
    
    while(str !== '1'){
        zero_count += getZeroCount(str)
        str = removeZero(str).length.toString('2')
        change_count++
    }
    
    return [change_count, zero_count] 
}

const getZeroCount = (str) => {
    let count = 0
    for(let i of str){
        if(i === '0') count ++
    }
    
    return count
}

const removeZero = (str) => {
    return str.replace(/[0]/g, '')
}