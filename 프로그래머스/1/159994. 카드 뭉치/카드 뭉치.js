function solution(cards1, cards2, goal) {
    let answer = "Yes"
    
    goal.forEach((item, index) => {
        if(cards1[0] === item) cards1.shift()
        else if(cards2[0] === item) cards2.shift()
        else answer = "No"
    })
    
    return answer;
}