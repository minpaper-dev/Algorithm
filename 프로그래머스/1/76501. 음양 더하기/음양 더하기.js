function solution(absolutes, signs) {
     const answer = absolutes.reduce((acc, num, i) => {
      return signs[i] ? acc + num : acc - num   
     }
     , 0)
    return answer;
}