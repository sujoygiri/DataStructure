/**
 * 
 * @param {number[]} arr 
 * @param {number} value 
 * @returns object
 */
function binarySearch(arr, value) {
    let start = 0;
    let end = arr.length - 1;
    let sortedArr = arr.sort((a, b) => a - b);
    console.log(sortedArr);
    return searchElement(sortedArr, start, end, value);
}

function searchElement(arr, start, end, value) {
    let mid = Math.floor((start + end) / 2);
    if (start > end) { /** If value didn't found in the array */
        return { foundIndex: null, value };
    }
    else if (arr[mid] === value) { /** If value found in the array */
        return { foundIndex: mid, value };
    } else if (arr[mid] > value) { /** If value less than middle value in the array */
        // start = 0;
        end = mid - 1;
    } else { /** If value greater than middle value in the array */
        start = mid + 1;
        // end = arr.length - 1;
        // return searchElement(arr, start, end, value);
    }
    return searchElement(arr, start, end, value);
}

console.log(binarySearch([5, 1, 3, 4, 9, 2], 4));