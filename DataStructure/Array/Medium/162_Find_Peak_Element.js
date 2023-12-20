/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let n = nums.length
    if(n === 1){
        return 0;
    }
    for(let index = 0; index < n; index++){
        if(index == 0 && nums[index] > nums[index+1]){
            return index
        }else if(index === n-1 && nums[index] > nums[index-1]){
            return index
        }
        else if(nums[index] > nums[index-1] && nums[index] > nums[index+1]){
            return index;
        }
    }
};

console.log(findPeakElement([1,2,1,3,5,6,4]))