// Question:
// Given a number, count how many times each digit (0-9) appears.

// Example:

// Input: 112233

// Output:
// 1: 2 times  
// 2: 2 times  
// 3: 2 times

function frequencyOfDigit(num) {
    let arr = [0,0,0,0,0,0,0,0,0,0]
    let n = num

    while (n > 0) {
        let rem = n % 10
        switch (rem) {
            case 0:
                arr[0]++;
                break;
            case 1:
                arr[1]++;
                break;
            case 2:
                arr[2]++;
                break;
            case 3:
                arr[3]++;
                break;
            case 4:
                arr[4]++;
                break;
            case 5:
                arr[5]++;
                break;
            case 6:
                arr[6]++;
                break;
            case 7:
                arr[7]++;
                break;
            case 8:
                arr[8]++;
                break;
            case 9:
                arr[9]++;
                break;            
            default:
                console.log("Default")
        }
        n = Math.trunc(n / 10)
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != 0 ){
            console.log(`${i}: ${arr[i]} times`)
        }
    }
}

frequencyOfDigit(112233444)

