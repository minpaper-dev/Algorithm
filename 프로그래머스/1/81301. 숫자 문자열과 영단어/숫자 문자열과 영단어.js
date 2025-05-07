function solution(s) {
    const word = ['zero','one','two','three','four','five','six','seven','eight','nine']
    
    for(let i = 0; i<word.length; i++){
        if(s.includes(word[i])) s = s.replace(new RegExp(word[i], "g"), i)
    }
    
    return Number(s);
}