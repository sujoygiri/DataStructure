/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let s = new Set(nums)
    let index = 0;
    s.forEach((val)=>{
        nums[index] = val;
        index++;
    })
    console.log(nums)
    return s.size;
};

console.log(removeDuplicates(nums = [0, 1, 2, 3, 4, 2, 2, 3, 3, 4]))