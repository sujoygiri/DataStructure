/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    if(target === "z"){
        return letters[0]
    }
    let n = letters.length;
    for(let index = 0; index < n; index++){
        if(letters[index] > target){
            return letters[index]
        }
    }
    return letters[0]
};

console.log(nextGreatestLetter(letters = ["x","x","y","y"], target = "z"))