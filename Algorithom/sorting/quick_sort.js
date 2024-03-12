/**
 * implementation of quick sort algorithm
 * @param {number[]} arr
 * @param {number} low
 * @param {number} high
 */
function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        let correctPivotIndex = getPivotIndex(arr, low, high);
        quickSort(arr,low,correctPivotIndex-1)
        quickSort(arr,correctPivotIndex+1,high)
    }
    return arr;
}

function getPivotIndex(arr, low, high) {
    let middle = Math.floor((high+low)/2)
    let pivot = arr[middle];
    let pivotIndex = low;

    for (let index = low; index < high; index++) {
        if (arr[index] < pivot) {
            let temp = arr[index];
            arr[index] = arr[pivotIndex];
            arr[pivotIndex] = temp;
            ++pivotIndex;
        }
    }
    let temp = arr[middle];
    arr[middle] = arr[pivotIndex];
    arr[pivotIndex] = temp;
    return pivotIndex;
}

console.log(quickSort([2,5,1,4,3,6,9,10]))


function quickSort(arr){
    let length = arr.length
    if(length <= 1){
        return arr;
    }
    let leftSubArr = []
    let rightSubArr = []
    let PIVOT = arr[0]

    for(let index = 1; index < length; ++index){
        if(arr[index] > PIVOT){
            rightSubArr.push(arr[index])
        }else{
            leftSubArr.push(arr[index])
        }
    }

    return [...quickSort(leftSubArr),PIVOT,...quickSort(rightSubArr)]
}

console.log(quickSort([2,5,1,4,3,9,6,10]))