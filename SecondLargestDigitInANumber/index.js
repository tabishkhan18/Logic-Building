// Question:
// Given a number, find the second-largest digit.

// Example:
// Input: 948132 → Digits: 9, 8, 4, 1, 3, 2 → Output: 8

function secondLargestDigit(num) {
    let n = num
    let largest = 0
    let secondLargest = 0
    while (num > 0) {
        let rem = num % 10
        if (largest < rem) {
            largest = rem
        }
        num = Math.trunc(num / 10)
    }
    num = n
    while (num > 0) {
        let rem = num % 10
        if (secondLargest < rem) {
            if (rem != largest) {
                secondLargest = rem
            }
        }
        num = Math.trunc(num / 10)
    }
    return console.log(secondLargest)
}

secondLargestDigit(1282346) // 6