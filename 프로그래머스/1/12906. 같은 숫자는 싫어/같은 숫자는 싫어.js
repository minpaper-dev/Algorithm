function solution(arr)
{
    const answer = []
    let prev = null
    for(let i of arr) {
        if(prev !== i){
            answer.push(i)
            prev = i
        }
    }
    
    return answer
}