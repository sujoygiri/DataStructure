/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    // console.log(getString(n))
    return getString(n)[k]
};
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

console.log(kthGrammar(15,2**10))
// console.log(getConvertedValue('01101001',5))

/**
 * 0
 * 01
 * 0110
 * 01101001
 * 0110100110010110
 */



