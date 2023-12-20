/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    let chocolateAmt = 0
    let totalMoney = money;
    prices.sort((a,b)=>a-b)
    // console.log(prices)
    prices.forEach(price=>{
        if(chocolateAmt < 2 && price <= money){
            money -= price
            chocolateAmt += 1
        }else{
            return
        }
        console.log(money)
    })
    if(chocolateAmt === 2){
        return money
    }else{
        return totalMoney;
    }
};

console.log(buyChoco([2,12,93,52,91,86,81,1,79,64],43))