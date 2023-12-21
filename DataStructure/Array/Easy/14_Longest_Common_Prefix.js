/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort()
    let n = strs.length - 1 // strs array length
    let l = strs[0].length; // length of first word in sorted strs array
    let lPrefix = ""
    for(let index = 0; index < l; index++){
        if(strs[0].trim()[index] === strs[n][index]){
            lPrefix += strs[0][index]
        }else{
            break;
        }
    }
    return lPrefix;
};

console.log(longestCommonPrefix(strs = ["flo","flew","flower"]))