function solution(s) {
    const center_for_array = Math.ceil(s.length / 2) - 1
    const answer = s.length % 2 ? s[center_for_array] : s[center_for_array] + s[center_for_array + 1] 
    return answer
}