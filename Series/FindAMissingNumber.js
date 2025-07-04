// Company: Accenture
// Write a function to find the missing number in an array of consecutive integer.

function findMissingNumber(arr) {
    for(let i = 0; i < arr.length-1; i++){
        if(Math.abs(arr[i+1] - arr[i]) !== 1){
            return arr[i] + 1
        }
    }
    return null
}

const arr = [2, 3, 4, 6, 7] // Missing Number:  5
console.log("Missing Number: ", findMissingNumber(arr));