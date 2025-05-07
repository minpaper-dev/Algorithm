function solution(k, score) {
    let ranking = []
    const answer = []
    
    for(let i = 0; i<score.length; i++){
    if(ranking.length < k){
        ranking.push(score[i])
    }
    else {
        let arr = [...ranking, score[i]].sort((a,b) => Number(b) - Number(a))
        ranking = arr.slice(0,k)
    }   
        answer.push(Math.min(...ranking))
    }
    
    return answer
}