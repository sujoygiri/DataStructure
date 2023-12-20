/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    let n = m = 0;
    nums1.forEach(num => {
        if(nums2.includes(num)){
            n++
        }
    });
    nums2.forEach(num => {
        if(nums1.includes(num)){
            m++
        }
    })
    return [n,m]
};

console.log(findIntersectionValues([3,4,2,3],[1,5]))