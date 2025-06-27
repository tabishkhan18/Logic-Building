// Find the sum of all digits in a number
// Example: 12345 => 1 + 2 + 3 + 4 + 5 = 15

function sumOfAllDigits(num){

    let n = num; 
    let sum = 0
    while(n>0){
        let rem = n%10
        sum += rem;
        n = Math.trunc(n/10)
    }
    return console.log(sum)    
}

sumOfAllDigits(12345) // 15