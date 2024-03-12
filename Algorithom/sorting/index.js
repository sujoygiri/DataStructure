/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let copiedArr = [...score];
    score.sort((a,b)=>a-b)
    let n = score.length
    let firstPosition = score[n-1]
    let secondPosition = score[n-2]
    let thirdPosition = score[n-3]
    let resultArr = []
    let athletePosition = 0
    for(let index = 0; index < n; index++){
        if(copiedArr[index] === firstPosition){
            athletePosition++
            resultArr.push("Gold Medal")
        }else if(copiedArr[index] === secondPosition){
            athletePosition++
            resultArr.push("Silver Medal")
        }else if(copiedArr[index] === thirdPosition){
            athletePosition++
            resultArr.push("Bronze Medal")
        }else{
            athletePosition++
            resultArr.push(athletePosition.toString())
        }
    }
    return resultArr;
};

console.log(findRelativeRanks(score = [5,4,3,2,1]))