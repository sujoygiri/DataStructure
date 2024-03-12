/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true

Constraints:
1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    s = s.toString();
    t = t.toString();
    let obj1 = {};
    let obj2 = {};
    for (let index = 0; index < s.length; ++index) {
        if (obj1[s[index]] && obj1[s[index]] !== t[index]) {
            return false;
        } else if (obj2[t[index]] && obj2[t[index]] !== s[index]) {
            return false;
        }
        else {
            obj1[s[index]] = t[index];
            obj2[t[index]] = s[index];
        }
    }
    return true;
};

console.log(isIsomorphic(s = "badc", t = "baba"));