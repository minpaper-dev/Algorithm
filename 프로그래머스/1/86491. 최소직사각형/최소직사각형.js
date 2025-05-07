function solution(sizes) {
    const arr = sizes.map((item) => item.sort((a,b) => a- b))
    const width_arr = arr.map((item) => item[0])
    const height_arr = arr.map((item) => item[1])
    
    
    return Math.max(...width_arr) * Math.max(...height_arr)
}