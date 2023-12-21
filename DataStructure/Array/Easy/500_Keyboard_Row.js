/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let keyBoardArray = ['qwertyuiop','asdfghjkl','zxcvbnm'];
    let resultArr = []
    for(let word of words){
        for(let row of keyBoardArray){
            let found = false;
            for(let w of word.toLowerCase()){
                if(row.indexOf(w) === -1){
                    found = false;
                    break;
                }
                found = true;
            }
            if(found){
                resultArr.push(word);
                break;
            }
        }
    }
    return resultArr;
};

console.log(findWords(words = ["adsdf","sfd"]))