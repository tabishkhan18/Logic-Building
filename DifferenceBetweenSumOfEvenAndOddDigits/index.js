// Question:
// Given a number, find the sum of even digits and the sum of odd digits, then return their difference.

// Example:
// Input: 12345
// Even digits: 2, 4 → Sum = 6
// Odd digits: 1, 3, 5 → Sum = 9
// Output: |6 - 9| = 3


function differenceBetweenSumOfEvenAndOddDigits(n){
    let even = []
    let odd  = []
    while(n>0){
        let rem = n%10
        if(rem%2==0){
            even.push(rem)
        }
        else{
            odd.push(rem)
        }
        n = Math.floor(n/10)
    }
    let evenSum = 0
    let oddSum  = 0

    for(let i = 0; i < even.length; i++){
        evenSum += even[i]
    }
    for(let i = 0; i < odd.length; i++){
        oddSum += odd[i]
    }

    let difference = Math.abs(evenSum - oddSum)
    
    return console.log("The Difference Sum of Even and Odd Digits is: ",difference)
}

differenceBetweenSumOfEvenAndOddDigits(94112243648)
// Even: 4 + 2 + 2 + 4 + 6 + 4 + 8 = 30
// Odd : 9 + 1 + 1 + 3 = 14
// Difference Sum = 16