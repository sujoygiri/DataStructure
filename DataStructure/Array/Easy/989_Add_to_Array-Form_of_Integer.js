/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    // let n = num.length
    // let arr = []
    // let a = 1;
    // let total = 0
    // while(n !== 0){
    //     total += (num[n-1] * a)
    //     a *= 10
    //     n--
    // }
    // total = total + k
    // console.log(total,a)
    // while(a !== 1){
    //     a /= 10
    //     arr.push(Math.round(total / a))
    //     total %= a
    // }
    // return arr

    let total = String(BigInt(num.join(''))+BigInt(k))
    console.log(total)
    let arr = []
    for(let index =0; index < total.length; index++){
        arr.push(Number.parseInt(total[index]))
    }
    return arr;

};

console.log(addToArrayForm(num = [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], k = 806))