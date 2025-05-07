function solution(arr) {
    const total = arr.reduce((acc, num)=> acc + num, 0)
    
    return total / arr.length;
}