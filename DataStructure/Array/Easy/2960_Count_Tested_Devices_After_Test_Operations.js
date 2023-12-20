/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function (batteryPercentages) {
    let numberOfDevice = 0;
    let n = batteryPercentages.length
    // for (let i = 0; i < n; i++) {
    //     if (batteryPercentages[i]) {
    //         numberOfDevice += 1;
    //         for (let j = i + 1; j < n; j++) {
    //             batteryPercentages[j] = Math.max(0, batteryPercentages[j] - 1);
    //         }
    //     }
    // }
    // return numberOfDevice;
    for (let i = 0; i < n; i++) {
        if (batteryPercentages[i] - numberOfDevice > 0) {
            numberOfDevice++;
        }
    }
    return numberOfDevice;
};

console.log(countTestedDevices([1, 1, 2, 1, 3]));