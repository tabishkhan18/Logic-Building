// Question:
// Given an array, reverse its elements without using another array.
// Example:
// Input: [1, 2, 3, 4] → Output: [4, 3, 2, 1]

function reverseArray(arr){

    let result = []
    for(let i = arr.length; i > 0; i-- ){
        result.push(arr[i-1])
    }
    return console.log(result)
}
const array = [1,2,3,4,5,6]
reverseArray(array)// [ 6, 5, 4, 3, 2, 1 ]