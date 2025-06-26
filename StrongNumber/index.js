// Find the strong number(also known as Krishnamurthy number) in JavaScript
// A strong number is a number whose sum of the factorial of its digits is equal to the number itself.
// For example, 145 is a strong number because 1! + 4! + 5! = 1 + 24 + 120 = 145.


function strongNumber(n) {
    let num = n;
    let sum = 0;
    let rem
    while (n > 0) {
        rem = n % 10;
        let fact = 1;
        for (let i = 1; i <= rem; i++) {
            fact = fact * i;
        }
        sum = sum + fact;
        n = Math.floor(n / 10)
    }

    if (sum == num) {
        console.log("It's a Strong Number")
    }
    else {
        console.log("Non Strong Number")
    }
    
    return sum;
}

strongNumber(140) // Output: Non Strong Number
strongNumber(145) // Output: It's a Strong Number