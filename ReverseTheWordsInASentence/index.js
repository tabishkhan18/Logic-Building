// Question:
// Given a sentence, reverse the order of words (not letters).
// Example:
// Input: "I am learning DSA" → Output: "DSA learning am I"

function reverseTheWordsInASentence(str){
    let strArray = str.split(" ")
    let result = ""
    for(let i = strArray.length; i > 0; i--){
        result = result.concat(strArray[i-1] + " ")
    }
    return console.log(result)
}

reverseTheWordsInASentence("Tony-Stark is Iron-Man")