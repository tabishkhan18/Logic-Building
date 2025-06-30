// Number Pattern No. = 3
// 123
// 456
// 789
// where n = 3


function numberPattern(n) {
    let count = 1;
    for (let i = 0; i < n; i++) {
        let line = ""
        for (let j = 0; j < n; j++) {
            line += " " + count
            count++
        }
        console.log(line)
    }
}

numberPattern(3)