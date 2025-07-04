// Question:
// Check if all digits in a number are even.

// Example:
// Input: 2486 → Output: Yes
// Input: 2483 → Output: No

function onlyEvenDigits(num){
    let flag = false
    while(num>0){
        let rem = num%10
        if(rem%2!==0) flag = true
        num = Math.trunc(num/10)
    }
    if(flag == true) console.log("No")
    else console.log("Yes")
}

onlyEvenDigits(24680) // yes
onlyEvenDigits(24690) // no