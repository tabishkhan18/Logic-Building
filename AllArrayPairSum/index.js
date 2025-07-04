// Question:
// Given an array and a target sum, find all unique pairs of elements whose sum is equal to the target.

// Example:
// Input: arr = [1, 2, 3, 4, 5], sum = 6
// Output: [1, 5], [2, 4]


function allArrayPairSum(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                console.log(`[${arr[i]}, ${arr[j]}]`)
                break;
            } 
        }
    }
}


let arr1 = [1, 2, 3, 4, 5]
let arr2 = [2, 6, 5, 9]

let target1 = 6
let target2 = 11



allArrayPairSum(arr1, target1) // [1,5], [2,4]
allArrayPairSum(arr2, target2) // [2,9], [6,5]