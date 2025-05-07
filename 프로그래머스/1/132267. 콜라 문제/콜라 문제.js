function solution(empty, plus, my_empty) {
    let answer = 0
    let extra = 0
    let count = 0
    
    while(my_empty + extra >= empty){
        if(extra) {
            my_empty += extra
            extra = 0        
        }
        extra = my_empty % empty
        answer += parseInt(my_empty / empty) * plus
        my_empty = parseInt(my_empty / empty) * plus
        
        count++
    }
    return answer
}