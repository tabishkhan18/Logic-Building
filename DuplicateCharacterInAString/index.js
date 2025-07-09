// Question:
// Given a string, remove all duplicate characters while preserving the original order.
// Example:
// Input: "programming" → Output: "progamin"

function removeDuplicateCharsFromString(str){
    let strArray = str.toLowerCase().split("")
    let strResult = ""
    for(let i = 0; i < strArray.length; i++){
        if(!strResult.includes(strArray[i])){
            strResult += strArray[i]
        }
    }
    return console.log(strResult)
}

let str = "programming"
removeDuplicateCharsFromString(str) // progamin