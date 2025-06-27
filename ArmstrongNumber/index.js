// Check the given number is armstrong number or not
// An Armstrong number (also known as a narcissistic number) is a number that is equal to the sum of its own digits each raised to the power of the number of digits.
// for example, 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 153.


function armstrongNumber(num) {
    let n = num
    let power = 0
    let sum = 1
    let result = 0
    while (n > 0) {
        n = Math.floor(n / 10)
        power++
    }

    n = num;

    while (n > 0) {
        let rem = n % 10
        for (let i = 0; i < power; i++) {
            sum = sum * rem
        }
        result += sum
        sum = 1
        n = Math.floor(n / 10)
    }
    
    
    if(result == num){
        console.log("Armstrong Number")
    }
    else
    {
        console.log("Non Armstrong Number")
    }


}

armstrongNumber(153) // Output: Armstrong Number
armstrongNumber(123) // Output: Not