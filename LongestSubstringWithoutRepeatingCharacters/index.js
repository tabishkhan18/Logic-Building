// #3 Leetcode (Medium) = Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without duplicate characters.

function lengthOfLongestSubstring(s) {
    let temp = ""
    let temp2 = ""
    for(let i = 0; i < s.length; i++){
        if(!temp.includes(s[i])){
            temp = temp.concat(s[i])
            if(temp.length > temp2.length){
                temp2 = temp
            }
        }
        else{
            const index = temp.indexOf(s[i])
            temp = temp.slice(index + 1) + s[i];
            if(temp.length > temp2.length){
                temp2 = temp
            }
        }
    }
    strLength = temp2.length
    return strLength;
};


// const s = "pwwkew" // wke
// const s = "abcabcbb" // abc
// const s = "bbbb"
const s = "dvdf" // 3
console.log(lengthOfLongestSubstring(s))