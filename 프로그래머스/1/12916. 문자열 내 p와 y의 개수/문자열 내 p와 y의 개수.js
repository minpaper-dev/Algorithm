function solution(s){
    const array = s.toLowerCase().split('')

    const p_count = array.filter((item)=> item === 'p').length
    const y_count = array.filter((item)=> item === 'y').length
    

    return p_count === y_count ? true : false;
}