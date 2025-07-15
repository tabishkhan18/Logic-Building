/*
#3136 Leetcode (Easy) = Valid Word
A word is considered valid if:

* It contains a minimum of 3 characters.
* It contains only digits (0-9), and English letters (uppercase and lowercase).
* It includes at least one vowel.
* It includes at least one consonant.

Example 1:
Input: word = "234Adas"
Output: true // This word satisfies the conditions.

Example 2:
Input: word = "b3"
Output: false // The length of this word is fewer than 3, and does not have a vowel.

Example 3:
Input: word = "a3$e"
Output: false // This word contains a '$' character and does not have a consonant.
*/

function isValidWord(word) {
    const vowels = 'AEIOUaeiou';
    const consonants = 'BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz';
    const validChars = 'AEIOUaeiouBCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz0123456789'
    if(word.length < 3 ) return false;
    let hasVowel = false
    let hasCons = false
    for(let i = 0; i < word.length; i++){
        
        if(!validChars.includes(word[i])) return false
        if(vowels.includes(word[i])) hasVowel = true
        if(consonants.includes(word[i])) hasCons = true
    }

    return hasCons && hasVowel
};
console.log(isValidWord("word")) //true 
console.log(isValidWord("wo4d")) //true 
console.log(isValidWord("wo%d")) //false 
console.log(isValidWord("wo")) //false 