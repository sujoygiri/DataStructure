/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
    let arr = [];
    for (let index = 1; index <= n; index++) {
        arr.push(index);
    }
    eliminatePlayer(arr, 0, k);
    return arr;
};

/**
 * @param {[]} arr 
 * @param {number} eliminateIndex 
 * @param {number} k
 */
function eliminatePlayer(arr, eliminateIndex, k) {
    console.log(arr);
    if (arr.length === 1) return;
    console.log(eliminateIndex, n);
    eliminateIndex = (eliminateIndex + k - 1) % arr.length;
    arr.splice(eliminateIndex, 1);
    eliminatePlayer(arr, eliminateIndex, k);
}

console.log(findTheWinner(5, 2));

/**
 * [1,2,3,4,5,6] 4
 * [1,2,3,4,6] 3
 * [1,2,3,6] 3
 * [1,2,6] 2
 */