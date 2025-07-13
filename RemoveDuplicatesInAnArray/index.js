// Question:
// Given an array, return all elements that appear more than once.
// Example:
// Input: [1, 2, 3, 2, 4, 1] → Output: [1, 2]

function removeDuplicatesInAnArray(arr){
    let arrTemp = []
    let arrDup = []
    for(let i = 0; i < arr.length; i++){
        if(!arrTemp.includes(arr[i])) arrTemp.push(arr[i])
        else arrDup.push(arr[i])
    }
    if(arrDup.length === 0) console.log("No Duplicates")
    else return console.log(arrDup)
}
let arr1 = [1,2,3,4,5,6,1,2,6,2]
removeDuplicatesInAnArray(arr1) //[1,2,6,2]