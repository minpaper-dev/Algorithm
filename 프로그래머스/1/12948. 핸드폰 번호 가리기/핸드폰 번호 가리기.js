function solution(phone_number) {
    const masking = '*'.repeat(phone_number.length - 4)
    return masking + phone_number.slice(-4) 
    
}