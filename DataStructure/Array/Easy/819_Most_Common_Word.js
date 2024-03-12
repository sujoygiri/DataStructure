/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    let hashTable = {};
    let result = "";
    let maxCount = 0;
    let allWord = paragraph.toLowerCase().split(/\W+/);
    allWord.forEach(word => {
        if (!banned.includes(word) && word !== "") {
            hashTable[word] = (hashTable[word] || 0) + 1;
        }
    });
    console.log(allWord);
    console.log(hashTable);
    for (let [key, value] of Object.entries(hashTable)) {
        maxCount = Math.max(maxCount, value);
        if (maxCount === value) {
            result = key;
        }
    }
    return result;

};

console.log(mostCommonWord(paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]));