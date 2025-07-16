/*

#2 Leetcode (Medium) = Add Two Numbers

*/

function addTwoNumbers(l1, l2) {
    let sum = []
    let zeros = l1.length - l2.length
    l1.reverse()
    l2.reverse()
    if (zeros > 0) {
        for (let i = 0; i < zeros; i++) {
            l2.unshift(0)
        }
    }
    if (zeros < 0) {
        for (let i = 0; i < Math.abs(zeros); i++) {
            l1.unshift(0)
        }
    }
    let rem = 0
    for (let i = l1.length; i > 0; i--) {
        rem = l1[i - 1] + l2[i - 1] + rem
        let nodeOnesValue = rem % 10
        rem = Math.trunc(rem / 10)
        sum.push(nodeOnesValue)
    }
    if (rem != 0) sum.push(rem)
    return sum
}

// let l1 = [2,4,3], l2 = [5,6,4] // [7,0,8]
// let l1 = [0], l2 = [0] // [0]
let l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9] // [8,9,9,9,0,0,0,1]
// let l1 = [2, 4, 9] ,l2 = [5, 6, 4, 9] // [7,0,4,0,1]
console.log(addTwoNumbers(l1, l2))