/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
    let seniorPassenger = 0;
    details.forEach(detail=>{
        if(Number.parseInt(detail.substring(11,13)) > 60){
            seniorPassenger += 1
        }
    })
    return seniorPassenger;
};

console.log(countSeniors(["7868190130M7522","5303914400F9211","9273338290F4010"]));
