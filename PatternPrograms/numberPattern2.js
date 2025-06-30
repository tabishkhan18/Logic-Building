// Number Pattern No. = 2
// 111
// 222
// 333
// where n = 3

function numberPattern(n) {

    let num = 1
    for (let i = 0; i < n; i++) {
        let line = ""
        for (let j = 0; j < n; j++) {
            line += num
        }
        console.log(line)
        num++
    }
}

numberPattern(3)