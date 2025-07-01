// Number Pattern No. = 4
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// where n = 4

function numberPattern(n) {
    let count = 1;
    for (let i = 0; i <= n; i++) {
        let line = ""
        for (let j = 0; j < i; j++) {
            line += " " + count
            count++
        }
        console.log(line)
    }
}

numberPattern(4)