function solution(arr) {
    if(arr.length === 1) return [-1]
    
    const sorted_array = [...arr].sort((a,b)=> a - b)
    const delete_index = arr.indexOf(sorted_array[0])
    
    arr.splice(delete_index, 1)
    return arr
}