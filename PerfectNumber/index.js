// Question:
// A number is perfect if it is equal to the sum of all its positive divisors (excluding itself).
// Write a program to check if a number is perfect.

// Example:
// Input: 28
// Divisors: 1 + 2 + 4 + 7 + 14 = 28
// Output: Perfect
// Input: 10
// Divisors: 1 + 2 + 5 = 8 ≠ 10 → Not Perfect


function perfectNumber(n){
    let counter = 1
    let sum = 0

    for(let i = 0; i < Math.trunc(n/2); i++){
        if(n%counter==0){
            sum += counter
        }
        counter++
    }
    if(sum == n){
        console.log("Yes " + n + " is Perfect Number")
    }
    else{
        console.log("No " + n + " is not a Perfect Number")
    }
}

perfectNumber(28) //Yes 28 is Perfect Number
perfectNumber(280) //No 280 is not a Perfect Number
perfectNumber(496) //Yes 496 is Perfect Number