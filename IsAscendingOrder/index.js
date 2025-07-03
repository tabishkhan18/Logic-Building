// Question:
// Check whether all digits of a given number are in strictly increasing order.

// Example:
// Input: 1234 → Output: Yes
// Input: 1324 → Output: No

function isAscendingOrder(num){
    let prev = 9
    let flag
    while(num>0){
        let rem = num%10
        if(rem <= prev){
            prev = rem
            flag = true
        }
        else{
            flag = false
            console.log("No")
            break;
        }
        num = Math.trunc(num/10)
    }
    if(flag == true) return console.log("yes")
}

isAscendingOrder(159) // Yes
isAscendingOrder(951) // No