// Question:
// Given an array of strings, find the longest prefix shared among all of them.
// Example:
// Input: ["flower", "flow", "flight"] → Output: "fl"
// Input: ["cat", "dog", "mouse"] → Output: ""

function longestCommonPrefix(arr) {
    if (arr.length === 0) return "";
    let prefix = arr[0];
    for (let i = 1; i < arr.length; i++) {
        while (!arr[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
            if (prefix === "") return "";
        }
    }
    return console.log(prefix);
}

let arr = ["flower", "flow", "floor"] 
longestCommonPrefix(arr) // flo