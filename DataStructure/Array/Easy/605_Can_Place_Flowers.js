/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 * solution no 1
 */
var canPlaceFlowers = function(flowerbed, n) {
    let l = flowerbed.length;
    for(let index = 0; index < l; index++){
        if(n === 0) return true;
        if(n && !flowerbed[index] && !flowerbed[index-1] && !flowerbed[index+1]){
            flowerbed[index] = 1;
            n--
        }
    }
    return n===0
};


/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 * solution no 2
*/
var canPlaceFlowers = function(flowerbed, n) {
    let l = flowerbed.length;
    
    for(let index = 0; index < l; index++){
        if(n && flowerbed[index] === 0 && flowerbed[index-1] !== 1 && flowerbed[index+1] !== 1){
            flowerbed[index] = 1;
            n--
        }
    }
    if(n === 0){
        return true;
    }else{
        return false;
    }
};

console.log(canPlaceFlowers(flowerbed = [0,0,0], n = 2))