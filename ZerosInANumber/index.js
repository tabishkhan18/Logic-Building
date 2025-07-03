// Question:
// Count how many 0s are there in the given number.

// Example:
// Input: 10020030
// Output: 4


function zerosInANumber(num){
    let flag = 0
    while(num > 0){
        let rem = num%10
        if(rem == 0) flag++
        num = Math.trunc(num/10)
    }
    if(flag == 1){
        return console.log(`${flag} Zero`)
    }
    return console.log(`${flag} Zeros`)
}

zerosInANumber(1002304500) //5 Zeros
zerosInANumber(104578) //1 Zero
zerosInANumber(14958) //0 Zeros