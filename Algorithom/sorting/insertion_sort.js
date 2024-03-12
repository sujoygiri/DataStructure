/**
 * Implement insertion sort algorithm
 * @param {number[]} arr
 * @returns {number[]}
 */
function insertionSort(arr) {
    let arrLength = arr.length;
    if (arrLength < 2) return arr;
    for (let i = 1; i < arrLength; ++i) {
        let currentElement = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            --j;
        }
        arr[j + 1] = currentElement;
    }
    return arr;
}

console.log(insertionSort(arr = [ 3, 4, 2, 5, 9, 10, 6]));