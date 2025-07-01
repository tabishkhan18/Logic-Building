// Question: Given a number, find the largest single digit in it.
// 45610 = 6 is the largest digit

function largestDigitInANumber(num){

    let n = num;
    let largest = 0;
    while(n>0){
        let rem = n%10
        if(rem>largest){
            largest = rem
        }
        n = Math.trunc(n/10)
    }
    return console.log(largest + " is the largest digit")

}

largestDigitInANumber(451219) // 9 is the largest digit