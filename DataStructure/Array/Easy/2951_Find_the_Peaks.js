/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function(mountain) {
    let resultArr = []
    for(let index = 1; index < mountain.length - 1; index++){
        if(mountain[index] > mountain[index-1] && mountain[index] > mountain[index+1]){
            resultArr.push(index)
        }
    }
    return resultArr;
};

console.log(findPeaks([2,4,4]))