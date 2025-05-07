function solution(n)
{
    var answer = 0;

    const num_to_string = String(n)
    
    for(let i = 0; i<num_to_string.length; i++){
        answer += Number(num_to_string[i]) 
    }

    return answer;
}