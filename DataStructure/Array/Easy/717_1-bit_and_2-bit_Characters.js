/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let n = bits.length;
    for(let index = 0; index < n; index ++){
        if(bits[index] === 0 && index === n -1){
            return true;
        }else if(bits[index] && (!bits[index+1] || bits[index+1])){
            index++
        }
    }
    return false;
};

console.log(isOneBitCharacter(bits = [1,1,0]))