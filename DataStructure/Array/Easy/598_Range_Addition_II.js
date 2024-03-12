/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    if(!ops.length) return m*n;
    let l = ops.length
    let minAi = ops[0][0]
    let minBi = ops[0][1];
    for(let index = 0; index < l; index++){
        minAi = Math.min(minAi,ops[index][0]);
        minBi = Math.min(minBi,ops[index][1])
    }
    return minAi * minBi;
};

console.log(maxCount(m = 3, n = 3, ops =  [[1,3],[4,2],[2,3],[3,3],[2,2]]))