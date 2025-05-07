function solution(answers) {
    const student1 = '12345'
    const student2 = '21232425'
    const student3 = '3311224455'
    
    let score1 = 0
    let score2 = 0
    let score3 = 0
    
    for(let i = 0; i < answers.length; i++){
        if(answers[i] == student1[i % student1.length]) score1++
        if(answers[i] == student2[i % student2.length]) score2++
        if(answers[i] == student3[i % student3.length]) score3++
    }
    
    
    const max = Math.max(score1, score2, score3)
    const arr = [score1, score2, score3].map((item, index) => item === max ? index + 1 : -1).filter((item) => item !== -1)
    return arr
}