/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let n = timeSeries.length;
    let totalDuration = 0;
    for(let index = 0; index < n; index++){
        if((timeSeries[index] + duration - 1) >= timeSeries[index+1]){
            totalDuration += timeSeries[index+1]
        }else{
            totalDuration += timeSeries[index] + duration - 1
        }
    }
    return totalDuration;
};

console.log(findPoisonedDuration(timeSeries = [1,2], duration = 2))