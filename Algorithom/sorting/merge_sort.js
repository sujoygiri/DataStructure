/**
 * Implement merge sort
 * @param {number[]} arr
 */
function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let leftSubArr = arr.slice(0, middle);
    let rightSubArr = arr.slice(middle);

    return merge(mergeSort(leftSubArr), mergeSort(rightSubArr));
}

/** 
 * @param {number[]} leftSubArr  
 * @param {number[]} rightSubArr 
*/
function merge(leftSubArr, rightSubArr) {
    let mergedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < leftSubArr.length && rightIndex < rightSubArr.length) {
        if (leftSubArr[leftIndex] < rightSubArr[rightIndex]) {
            mergedArr.push(leftSubArr[leftIndex]);
            ++leftIndex;
        } else {
            mergedArr.push(rightSubArr[rightIndex]);
            ++rightIndex;
        }
    }
    console.log({leftSubArr,rightSubArr,mergedArr});
    return mergedArr.concat(leftSubArr.slice(leftIndex)).concat(rightSubArr.slice(rightIndex))
}

console.log('After sort:- ',mergeSort(['abza','advz','aaca','axsc']));