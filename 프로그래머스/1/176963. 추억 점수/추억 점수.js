function solution(name, yearning, photo) {
    let yearning_obj = {}
    name.forEach((item, index) => {
        yearning_obj[item] = yearning[index]
    })
    
    const answer = photo.map((item) => item.reduce((acc, cur) => acc + (yearning_obj[cur] || 0), 0))
    return answer;
}