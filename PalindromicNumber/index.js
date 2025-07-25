// Given a number, check if it is palindromic or not
// A palindromic number is a number that remains the same when its digits are reversed

function palindromicNumber(n) {
    let rev = 0
    let num = n
    while (n > 0) {
        let rem = n % 10
        rev = rev * 10 + rem
        n = Math.floor(n / 10)
    }
    if(rev === num){
        console.log("The number is palindromic")
    }
    else{
        console.log("Non palindromic")
    }
}

palindromicNumber(12345) // Non palindromic
palindromicNumber(12321) // The number is palindromic