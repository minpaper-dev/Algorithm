function solution(progresses, speeds) {
    
    const complete = progresses.map((item, index) => Math.ceil((100 - item) / speeds[index]))
    
    let max = complete[0]
    let count = 1
    const answer = []
    
    
    for(let i = 1; i < complete.length; i++){
        console.log(complete[i])
        if(complete[i] <= max) {
            count++
        }
        else {
            answer.push(count)
            max = complete[i]
            count = 1
        }
    }
    answer.push(count)
    
    return answer
}