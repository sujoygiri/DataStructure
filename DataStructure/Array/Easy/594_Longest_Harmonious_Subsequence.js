/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let hashMap = {}
    let maxLHS = 0
    for(let num of nums){
        if(hashMap[num]){
            hashMap[num] += 1
        }else{
            hashMap[num] = 1;
        }
    }
    for(let [key,value] of Object.entries(hashMap)){
        if(hashMap[key-1]){
            maxLHS = Math.max(maxLHS,hashMap[key-1]+value)
        }
    }
    return maxLHS
};

console.log(findLHS(nums = [1,3,2,2,5,2,3,7]))
