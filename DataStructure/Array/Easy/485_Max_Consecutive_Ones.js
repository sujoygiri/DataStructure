/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxConsecutive = 0;
    let count = 0;
    for(let num of nums){
        if(num === 1){
            count++;
            maxConsecutive = count > maxConsecutive ? count : maxConsecutive;
        }else{
            count = 0
        }
    }
    return maxConsecutive;
};

console.log(findMaxConsecutiveOnes(nums = [1,0,1,1,0,1]))