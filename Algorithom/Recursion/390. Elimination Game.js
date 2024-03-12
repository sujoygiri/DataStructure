/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {
    let arr = [];
    for (let index = 1; index <= n; index++) {
        arr[index - 1] = index;
    }
    removeElement(arr);
    return arr[0];
};

/**
 * @param {[]} arr
 */
function removeElement(arr) {
    if (arr.length === 1) return;
    removeFromLeft(arr, 0);
    removeFromRight(arr, arr.length - 1);
    removeElement(arr);
}

/**
 * @param {[]} arr
 * @param {number} index
 */
function removeFromLeft(arr, index) {
    if (arr[index] === undefined || arr.length === 1) return;
    removeFromLeft(arr, index + 2);
    arr.splice(index, 1);
}

/**
 * @param {[]} arr
 * @param {number} index
 */
function removeFromRight(arr, index) {
    if (arr[index] === undefined || arr.length === 1) return;
    arr.splice(index, 1);
    removeFromRight(arr, index - 2);
}



console.log(lastRemaining(10900));