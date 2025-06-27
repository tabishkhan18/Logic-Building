// Find the product of all digits in a number
// for example, if the input is 1234, the output should be 24 (1 * 2 * 3 * 4 = 24)


function productOfAllDigit(num){

    let n = num; 
    let pro = 1

    while(n>0){
        let rem = n%10
        pro *= rem
        n = Math.trunc(n/10)
    }

    return console.log(pro)
}

productOfAllDigit(12345) // 120