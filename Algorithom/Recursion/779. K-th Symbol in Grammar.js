/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    // console.log(getString(n))
    // return getString(n)[k-1]
    if(n === 1 && k === 1) return 0;
    let mid = Math.pow(2,n-1)/2
    if(k <= mid){
        return kthGrammar(n-1,k);
    }else{
        return kthGrammar(n-1,k-mid) === 0 ? 1 : 0;
    }
};
/**
 * mid = 4 -> 3 <= 4 yes -> kth(3,3) 1
 * mid = 2 -> 3 <= 2 no -> kth(2,3-2) 1
 * mid = 1 -> 1 <= 1 yes -> kth(1,1) 0
 * return 0
 * 
 */

function getString(n){
    if(n === 1) return '0';
    let value = getString(n-1);
    return getConvertedValue(value,value.length)
}

function getConvertedValue(value,n){
    if(n === 0) return '';
    let returnValue = getConvertedValue(value,n-1);
    if(value[n-1] === '0'){
        returnValue += '01'
    }else if(value[n-1] === '1'){
        returnValue += '10'
    }
    return returnValue;
}

console.log(kthGrammar(4,3))
// console.log(getConvertedValue('01101001',5))

/**
 * 0
 * 01
 * 0110
 * 01101001
 * 0110100110010110
 */



