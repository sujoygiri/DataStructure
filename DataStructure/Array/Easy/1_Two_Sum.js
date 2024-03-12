/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    /*Approach 1 with brute force */
    let result = []
    for(let i =0; i < nums.length; i++){
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i]+nums[j] === target){
                result.push(i)
                result.push(j)
                break;
            }
        }
    }
    // return result;
    /* ----------------- */
    /*Approach 2 with map --->>>*/
    const numAndIndex = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numAndIndex.has(complement)) {
            return [numAndIndex.get(complement), i];
        }
        numAndIndex.set(nums[i], i);
    }
    
};

console.log(twoSum([3,3],6))