/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
    let finalBinaryString = constructBinaryString(n);
    return finalBinaryString[k-1];
};

function constructBinaryString(n){
    if(n === 1) return '0';
    let value = constructBinaryString(n-1);
    value += '1' + reverseBinaryString(invertBinaryString(value,0,''),0);
    return value;
}

function reverseBinaryString(str,index){
    if(index === str.length) return '';
    let value = reverseBinaryString(str,index+1);
    value += str[index];
    return value;
}

function invertBinaryString(str,index,result){
    if(index === str.length) return result;
    if(str[index] === '0'){
        result += '1';
    }else{
        result += '0';
    }
    return invertBinaryString(str,index+1,result);
}

console.log(findKthBit(10,10))