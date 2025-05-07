function solution(n,m) {
    const GCD = getGCD(n,m)
    const LCM = getLCM(n,m,GCD)
    
    return [GCD, LCM]
}

const getGCD = (a, b) => {
    return b === 0 ? a : getGCD(b, a % b)
}

const getLCM = (a, b, gcd) => {
    return (a * b) / gcd
}