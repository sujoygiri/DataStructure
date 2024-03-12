/**
 * Problem statement
 * Given an N length of circular array, on which we have to do some operation to make all elements equal.
 * Following are the condition
 * Condition: For every Arr[i] we can replace the adjacent element with it
 * And the element before 0th index is last index and element after last index is 0th index
 * 
 * Find the minimum number of steps to make the all array elements to equal
 * 
 * Test case : 1  
 * Input:  N = 4, Arr = [2,2,1,1]
 * Output: 1
 * 
 * Test case: 2
 * Input: N = 4, Arr = [1,1,1,1]
 * Output: 0
 * 
 * Test case: 3
 * Input: N = 4, Arr = [1,2,3,4]
 * Output: 2
 * 
 * Test case: 4
 * Input: N = 7, Arr = [1,7,2,4,4,5,6]
 * Output: 3
 * 
 * 
 * @param {number[]} arr
 */

function minimumStepsToEqualizeArray(arr) {
    let dict = {};
    let maxPresentValue = null;
    let max = 0;
    arr.forEach(ele => {
        dict[ele] = (dict[ele] + 1) || 1;
    });
    for (const [key, value] of Object.entries(dict)) {
        max = Math.max(max, value);
        if (max === value) {
            maxPresentValue = Number.parseInt(key);
        }
    }
    let index = 0;
    let numberOfSteps = 0;
    while (index < arr.length - 1) {
        if (arr[index] !== maxPresentValue) {
            if (index === 0) {
                arr[arr.length - 1] = maxPresentValue;
            }
            arr[index] = maxPresentValue;
            arr[index + 1] = maxPresentValue;
            numberOfSteps++;
            index++;
        } else {
            index++;
        }
    }
    console.log(arr);
    return numberOfSteps;
}

console.log(minimumStepsToEqualizeArray(arr = [1,4,2,3,5,6,6]));