// Pattern no 1
/* 
*****
*****
*****
*****
*****
*/
function patternNo1(lineNumber, starNumber) {
    let starCount = lineNumber;
    if (starNumber) {
        starCount = starNumber;
    }
    for (let index = 0; index < lineNumber; index++) {
        let starLine = "";
        for (let star = 0; star < starCount; star++) {
            starLine += "*";
        }
        console.log(starLine);
    }
}

// patternNo1(lineNumber=3,starNumber=5)

/* -------------------------------------------------------------------------------------- */

// Pattern no 2
/*
*****
*   *
*   *
*   *
*****
*/
function patternNo2(lineNumber) {
    for (let index = 0; index < lineNumber; index++) {
        let starLine = "";
        for (let star = 0; star < lineNumber; star++) {
            if (index === 0 || index === lineNumber - 1 || star === 0 || star === lineNumber - 1) {
                starLine += "*";
            } else {
                starLine += " ";
            }
        }
        console.log(starLine);
    }
}

// patternNo2(lineNumber=6)

/* -------------------------------------------------------------------------------------- */

// pattern no 3
/*
    *
   **
  ***
 ****
*****
*/
function patternNo3(lineNumber) {
    for (let index = 1; index <= lineNumber; index++) {
        let spaceLine = "";
        let starLine = "";
        for (let space = index; space < lineNumber; space++) {
            spaceLine += " ";
        }
        for (let star = 1; star <= index; star++) {
            starLine += "*";
        }
        console.log(spaceLine + starLine);
    }
}

// patternNo3(lineNumber=5)

/* -------------------------------------------------------------------------------------- */

// Pattern no 4
/*
*
**
***
****
*****
*/
function patternNo4(lineNumber) {
    for (let index = 0; index < lineNumber; index++) {
        let starLine = "";
        for (let star = 0; star <= index; star++) {
            starLine += "*";
        }
        console.log(starLine);
    }
}

// patternNo4(lineNumber = 5);

/* -------------------------------------------------------------------------------------- */

// Pattern no 5
/*
*****
****
***
**
*
*/
function patternNo5(lineNumber) {
    for (let index = lineNumber; index > 0; index--) {
        let starLine = "";
        for (let star = 0; star < index; star++) {
            starLine += "*";
        }
        console.log(starLine);
    }
}

// patternNo5(lineNumber = 5);

/* -------------------------------------------------------------------------------------- */

// Pattern no 6
/*
*
**
* *
*  *
*   *
******
*/
function patternNo6(lineNumber) {
    for (let index = 0; index <= lineNumber; index++) {
        let starLine = "";
        for (let star = 0; star < index; star++) {
            if (index === lineNumber) {
                starLine += "*";
            } else if (star === 0 || star === index - 1) {
                starLine += "*";
            } else {
                starLine += " ";
            }
        }
        console.log(starLine);
    }
}

// patternNo6(lineNumber = 6);

/* -------------------------------------------------------------------------------------- */

// Pattern no 7
/*
    *
   ***
  *****
 *******
*********
*/
function patternNo7(lineNumber) {
    let initialStar = 0;
    for (let index = 1; index <= lineNumber; index++) {
        let starLine = "";
        let spaceLine = "";
        for (let space = index; space < lineNumber; space++) {
            spaceLine += " ";                                       // index + initialStar = starCount
        }                                                           // 1 + 0 = 1
        for (let star = 0; star < initialStar + index; star++) {    // 2 + 1 = 3
            starLine += "*";                                        // 3 + 2 = 5
        }                                                           // 4 + 3 = 7
        initialStar++;                                              // 5 + 4 = 9
        console.log(spaceLine + starLine);
    }
}

// patternNo7(lineNumber = 5);

/* -------------------------------------------------------------------------------------- */

// Pattern no 8
/*
*********
 *******
  *****
   ***
    *
*/
function patternNo8(lineNumber) {
    let initialStar = lineNumber;
    for (let index = lineNumber; index >= 1; index--) {
        let starLine = "";
        let spaceLine = "";
        for (let space = index; space < lineNumber; space++) {
            spaceLine += " ";                                       // index + initialStar = starCount
        }                                                           // 5 + 4 = 9 
        for (let star = 0; star < initialStar + index; star++) {    // 4 + 3 = 7
            starLine += "*";                                        // 3 + 2 = 5
        }                                                           // 2 + 1 = 3
        initialStar--;                                              // 1 + 0 = 1 
        console.log(spaceLine + starLine);
    }
}

// patternNo8(lineNumber = 5);

/* -------------------------------------------------------------------------------------- */

// Pattern no 9
/*
    *
   * *
  *   *
 *     *
*********
*/
function patternNo9(lineNumber) {
    let initialStar = 0;
    for (let index = 1; index <= lineNumber; index++) {
        let starLine = "";
        let spaceLine = "";
        for (let space = index; space < lineNumber; space++) {
            spaceLine += " ";
        }
        for (let star = 0; star < initialStar + index; star++) {
            if (star === 0 || star === initialStar + index - 1) {
                starLine += "*";
            } else if (index < lineNumber) {
                starLine += " ";
            } else {
                starLine += "*";
            }
        }
        initialStar++;
        console.log(spaceLine + starLine);
    }
}

// patternNo9(lineNumber=5)

/* -------------------------------------------------------------------------------------- */

// Pattern no 10
/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/
function patternNo10(lineNumber) {
    // printing upper part of the pyramid
    for (let index = 1; index < lineNumber; index++) {
        // printing upper pyramid space
        let spaceLine = "";
        for (let space = index; space < lineNumber; space++) {
            spaceLine += " ";
        }
        // printing upper pyramid star
        let starLine = "";
        for (let star = 1; star <= (2 * index - 1); star++) {
            starLine += "*";
        }
        console.log(spaceLine + starLine);
    }
    // printing middle star line
    let middleStarLine = "";
    for (let middleStar = 1; middleStar <= (2 * lineNumber - 1); middleStar++) {
        middleStarLine += "*";
    }
    console.log(middleStarLine);
    // printing lower part of the pyramid
    for (let index = lineNumber - 1; index >= 0; index--) {
        // printing lower pyramid space
        let spaceLine = "";
        for (let space = index; space < lineNumber; space++) {
            spaceLine += " ";
        }
        // printing lower pyramid star
        let starLine = "";
        for (let star = (2 * index - 1); star > 0; star--) {
            starLine += "*";
        }
        console.log(spaceLine + starLine);
    }
}

// patternNo10(lineNumber=30)

/* -------------------------------------------------------------------------------------- */

// Pattern no 11
/*
    *
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *
*/
function patternNo11(lineNumber) {

    // printing star in first and last index
    function printStar(starIndex, lineNumber) {
        let starLine = "";
        if (starIndex === 1) {
            starLine += "*";
        } else if (starIndex === (2 * lineNumber - 1)) {
            starLine += "*";
        } else {
            starLine += " ";
        }
        return starLine;
    }
    // printing upper part of the pyramid
    for (let index = 1; index < lineNumber; index++) {
        // printing upper pyramid space
        let spaceLine = "";
        for (let space = index; space < lineNumber; space++) {
            spaceLine += " ";
        }
        // printing upper pyramid star
        let starLine = "";
        for (let star = 1; star <= (2 * index - 1); star++) {
            starLine += printStar(star, index);
        }
        console.log(spaceLine + starLine);
    }
    // printing middle star line
    let middleStarLine = "";
    for (let middleStar = 1; middleStar <= (2 * lineNumber - 1); middleStar++) {
        middleStarLine += printStar(middleStar, lineNumber);
    }
    console.log(middleStarLine);
    // printing lower part of the pyramid
    for (let index = lineNumber - 1; index >= 0; index--) {
        // printing lower pyramid space
        let spaceLine = "";
        for (let space = index; space < lineNumber; space++) {
            spaceLine += " ";
        }
        // printing lower pyramid star
        let starLine = "";
        for (let star = (2 * index - 1); star > 0; star--) {
            starLine += printStar(star, index);
        }
        console.log(spaceLine + starLine);
    }
}

// patternNo11(lineNumber = 40)

/* -------------------------------------------------------------------------------------- */

// Pattern no 12
/*
*********
 *******
  *****
   ***
    *
   ***
  *****
 *******
*********
*/
function patternNo12(lineNumber) {
    function printPyramid(index) {
        let spaceLine = "";
        let starLine = "";
        for (let space = index; space < lineNumber; space++) {
            spaceLine += " ";
        }
        for (let star = (2 * index + 1); star > 0; star--) {
            starLine += "*";
        }
        return spaceLine + starLine;
    }
    // printing upper part of the pyramid
    for (let index = lineNumber - 1; index > 0; index--) {
        let upperPyramid = printPyramid(index);
        console.log(upperPyramid);
    }
    // printing middle part of the pattern
    let middleStarLine = "";
    for (let middleStar = 0; middleStar <= lineNumber; middleStar++) {
        if (middleStar === lineNumber) {
            middleStarLine += "*";
        } else {
            middleStarLine += " ";
        }
    }
    console.log(middleStarLine);
    // printing lower part of the pyramid
    for (let index = 1; index < lineNumber; index++) {
        let lowerPyramid = printPyramid(index);
        console.log(lowerPyramid);
    }
}

// patternNo12(lineNumber=5)

/* -------------------------------------------------------------------------------------- */

// Pattern no 13
/*
*
**
***
****
*****
****
***
**
*
*/
function patternNo13(lineNumber) {
    for (let index = 0; index < (2 * lineNumber - 1); index++) {
        let starLine = "";
        if (index >= lineNumber) {
            for (let lowerStar = index - lineNumber; lowerStar < lineNumber - 1; lowerStar++) {
                starLine += "*";
            }
        } else {
            for (let upperStar = 0; upperStar <= index; upperStar++) {
                starLine += "*";
            }
        }
        console.log(starLine);
    }
}
// patternNo13(lineNumber=4)

/* -------------------------------------------------------------------------------------- */

// Pattern no 14
/*
    *
   **
  ***
 ****
*****
 ****
  ***
   **
    *
*/
function patternNo14(lineNumber) {
    for (let index = 0; index < (2 * lineNumber - 1); index++) {
        let spaceLine = "";
        let starLine = "";
        if (index >= lineNumber) {
            for (let lowerSpace = 0; lowerSpace <= index - lineNumber; lowerSpace++) {
                spaceLine += " ";
            }
            for (let lowerStar = index - lineNumber; lowerStar < lineNumber - 1; lowerStar++) {
                starLine += "*";
            }
        } else {
            for (let upperSpace = index; upperSpace < lineNumber - 1; upperSpace++) {
                spaceLine += " ";
            }
            for (let upperStar = 0; upperStar <= index; upperStar++) {
                starLine += "*";
            }
        }
        console.log(spaceLine + starLine);
    }
}
// patternNo14(lineNumber=10)

/* -------------------------------------------------------------------------------------- */

// Pattern no 15
/*
    1
   121
  12321
 1234321
123454321
*/
function patternNo15(lineNumber) {
    for (let index = 1; index <= lineNumber; index++) {
        let numLine = "";
        let spaceLine = "";
        for (let space = index; space < lineNumber; space++) {
            spaceLine += " ";
        }
        for (let num = 1; num <= (2 * index - 1); num++) {
            if (num <= index) {
                numLine += num;
            } else {
                numLine += (2 * index - num);  //6 - 4  6 -5
            }
        }
        console.log(spaceLine + numLine);
    }
}
// patternNo15(lineNumber=8)

/* -------------------------------------------------------------------------------------- */

// Pattern no 16
/*
* * * * *   |   1 2 3 4 5   |   A B C D E
*       *   |   1       5   |   A       E
*       *   |   1       5   |   A       E
*       *   |   1       5   |   A       E
* * * * *   |   1 2 3 4 5   |   A B C D E
*/
function patternNo16(lineNumber, patternType) {
    for (let index = 1; index <= lineNumber; index++) {
        // let spaceLine = ""
        let starLine = "";
        let startIndex = null;
        let endIndex = null;
        if (patternType.toLowerCase() === 's' || patternType.toLowerCase() === 'n') {
            startIndex = 1;
            endIndex = lineNumber;
        } else {
            startIndex = 65;
            endIndex = 69;
        }
        for (let star = startIndex; star <= endIndex; star++) {
            if (index === 1 || index === lineNumber || star === startIndex || star === endIndex) {
                if (patternType.toLowerCase() === 's') {
                    starLine += " * ";
                } else if (patternType.toLowerCase() === 'n') {
                    starLine += " " + star + " ";
                } else {
                    starLine += " " + String.fromCharCode(star) + " ";
                }
            } else {
                starLine += "   ";
            }
        }
        console.log(starLine);
    }
}
//patternNo16(lineNumber = 5,patternType='a'); 
/* For star -> 's', for number -> 'n', for alphabet -> 'a' */

/* -------------------------------------------------------------------------------------- */

// Pattern no 17
/*
* * * * * * * * *   |   1 2 3 4 5 6 7 8 9    |   A B C D E F G H I
  *           *     |     1           7      |     A           G
    *       *       |       1       5        |       A       E
      *   *         |         1   3          |         A   C
        *           |           1            |           A
      *   *         |         1   3          |         A   C
    *       *       |       1       5        |       A       E
  *           *     |     1           7      |     A           G
* * * * * * * * *   |   1 2 3 4 5 6 7 8 9    |   A B C D E F G H I
*/
function patternNo17(lineNumber, patternType) {
    for (let index = 1; index <= lineNumber; index++) {
        // let spaceLine = ""
        let starLine = "";
        let startIndex = null;
        let endIndex = null;
        if (patternType.toLowerCase() === 's' || patternType.toLowerCase() === 'n') {
            startIndex = 1;
            endIndex = lineNumber;
        } else {
            startIndex = 65;
            endIndex = 69;
        }
        for (let star = startIndex; star <= endIndex; star++) {
            if (index === 1 || index === lineNumber || star === index || star === lineNumber - index + 1) {
                if (patternType.toLowerCase() === 's') {
                    starLine += " * ";
                } else if (patternType.toLowerCase() === 'n') {
                    starLine += " " + star + " ";
                } else {
                    starLine += " " + String.fromCharCode(star) + " ";
                }
            } else {
                starLine += "   ";
            }
        }
        console.log(starLine);
    }
}
// patternNo17(lineNumber = 9, patternType = 'n'); 
/* For star -> 's', for number -> 'n', for alphabet -> 'a' */











// let cliArgs = process.argv.slice(2)[0]
// console.log(cliArgs);


/*
c -> come to room 
u -> go to meeting room leaving a chair
r -> come to take a chair from meeting room
l -> leave the room
*/

function chairNeededToBuy(simulation) {
    let totalChair = 0;
    let availableChair = 0;
    for (let index = 0; index < simulation.length; index++) {
        switch (simulation[index]) {
            case 'C':
                if (!availableChair) {
                    totalChair += 1;
                }
                else {
                    availableChair--;
                }
                break;
            case 'U':
                availableChair += 1;
                break;
            case 'R':
                if (availableChair) {
                    availableChair--;
                } else {
                    totalChair += 1;
                }
                break;
            case 'L':
                availableChair++;
                break;
            default:
                console.log("Not allowed");
        }
    }
    return totalChair;

}

// console.log(chairNeededToBuy('CUCRL'))

/* Hacker Rank array problem => '2D array' */
function hourglassSum(arr) {
    // Write your code here
    let arrLength = arr.length;
    let sumArr = [];
    for (let i = 0; i < arrLength - 2; i++) {
        for (let j = 0; j < arrLength - 2; j++) {
            let sum = 0;
            for (let k = i; k <= i + 2; k++) {
                let numLine = "";
                for (let l = j; l <= j + 2; l++) {
                    numLine += " " + arr[k][l];
                    sum += arr[k][l];
                }
                console.log(numLine);
            }
            console.log(sum);
            console.log('\n');
            sum -= (arr[i + 1][j] + arr[i + 1][j + 2]);
            sumArr.push(sum);
        }
    }
    console.log(sumArr);
    console.log(sumArr.sort((a, b) => a - b));
    return sumArr.sort((a, b) => a - b)[sumArr.length - 1];
}

/* sum 1 -> 00 01 02
               11
            20 21 22

    sum 2 -> 01 02 03
                12
             21 22 23
    
    sum 3 -> 02 03 04
                13
             22 23 24
            
*/

let arr = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];

let arr1 = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];

let arr3 = [
    [0, -4, -6, 0, -7, -6],
    [-1, -2, -6, -8, -3, -1],
    [-8, -4, -2, -8, -8, -6],
    [-3, -1, -2, -5, -7, -4],
    [-3, -5, -3, -6, -6, -6],
    [-3, -6, 0, -8, -6, -7]
];

/*console.log(hourglassSum(arr3))*/

/*Hacker Rank Array Problem => 'Array left rotation' */
function rotateLeft(d, arr) {
    // Write your code here
    // let rotatedArr = [...arr]
    for (let index = 0; index < d; index++) {
        let firstEle = arr[0];
        let eleIndex = 0;
        for (eleIndex = 0; eleIndex < arr.length - 1; eleIndex++) {
            arr[eleIndex] = arr[eleIndex + 1];
        }
        arr[eleIndex] = firstEle;
    }
    return arr;

}

/*console.log(rotateLeft(4000, [1, 2, 3, 4, 5]))*/


/*Hacker Rank Array Problem => 'Sparse Arrays' */
function matchingStrings(stringList, queries) {
    // Write your code here
    let obj = {};
    let resultArr = [];
    queries.forEach(element => {
        obj[element] = 0;
    });
    stringList.forEach(element => {
        if (obj.hasOwnProperty(element)) {
            obj[element] += 1;
        }
    });
    queries.forEach(element => {
        resultArr.push(obj[element]);
    });
    return resultArr;
}

/*console.log(matchingStrings(['aba', 'bab', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']));*/

function arrayManipulation(n, queries) {
    // Write your code here
    // let obj = {};
    // let maxValue = 0;
    // for (let index = 0; index < queries.length; index++) {
    //     for (let qIndex = queries[index][0]; qIndex <= queries[index][1]; qIndex++) {
    //         if (obj.hasOwnProperty(qIndex)) {
    //             obj[qIndex] += queries[index][2];
    //         } else {
    //             obj[qIndex] = queries[index][2];
    //         }
    //     }
    // }
    // for (let [key, value] of Object.entries(obj)) {
    //     if (value >= maxValue) {
    //         maxValue = value;
    //     }
    // }
    // return maxValue;
    const tempArray = Array(n + 1).fill(0);
    queries.forEach((queries) => {
        const [a, b, k] = queries;
        tempArray[a - 1] += k;
        tempArray[b] -= k;
        console.log(tempArray + '\n')
    });
    let currentSum = 0;
    let max = 0;
    tempArray.forEach((currentModifier) => {
        currentSum += currentModifier;
        max = Math.max(max, currentSum);
    });
    return max;
}

/*
const tempArray = Array(n + 1).fill(0)
queries.forEach((querie) => {
    const [a,b,k] = querie
    tempArray[a - 1]+=k
    tempArray[b]-=k
})
let currentSum = 0;
let max = 0
tempArray.forEach((currentModifier) => {
    currentSum += currentModifier
    max = Math.max(max, currentSum)
})
return max

*/

console.log(arrayManipulation(10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]));
// console.log(arrayManipulation(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]]))





