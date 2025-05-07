function solution(price, money, count) {
    const total_price = (count / 2) * (price + (price * count))
    console.log(total_price)

    return Math.max(0, total_price - money );
}