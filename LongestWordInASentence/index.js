// Question:
// Given a sentence, return the longest word.

// Example:
// Input: "Learning DSA is super fun" → Output: "Learning"


function longestWordInASentence(str){

    let strArray = str.split(" ")
    let flag = 0
    for(let i = 0; i < strArray.length; i++){
        if(strArray[i].length > flag){
            flag = strArray[i].length
        }
    }
    for(let i = 0; i < strArray.length; i++){
        
        if(strArray[i].length === flag){
            return console.log(strArray[i])
        }
    }
}

longestWordInASentence("Longest word in a sentence") //sentence 