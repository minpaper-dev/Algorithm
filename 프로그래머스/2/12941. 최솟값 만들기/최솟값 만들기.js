function solution(A,B){
    A.sort((a,b) => a - b)
    B.sort((a,b) => b - a)
    
    const answer = A.reduce((acc, num, i) => acc = acc + A[i] * B[i] , 0)
    return answer
}