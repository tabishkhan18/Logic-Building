// Question:
// Given an array and a target sum, find all unique pairs of elements whose sum is equal to the target.

// Example:
// Input: arr = [1, 2, 3, 4, 5], sum = 6
// Output: [1, 5], [2, 4]


function allArrayPairSum(nums, target) {
    let temp = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                temp.push(i, j)
            }
            
        }
    }
    return temp;
}

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [2, 6, 5, 9]

let target1 = 6
let target2 = 11

console.log(allArrayPairSum(arr1, target1)) // [1,5], [2,4]
console.log(allArrayPairSum(arr2, target2)) // [2,9], [6,5]