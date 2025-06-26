// Find the reverse of any number
// A number is reversed by taking the last digit and appending it to the result.


function numRev(n) {
    let rev = 0;
    while (n > 0) {
        let rem = n % 10;
        rev = rev * 10 + rem;
        n = Math.floor(n / 10);
    }
    console.log(rev);
    return rev;
}

numRev(12345); // 54321
numRev(94112243648); // 84643211249