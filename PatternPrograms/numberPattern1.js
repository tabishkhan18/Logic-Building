// Number Pattern No. = 1
// 123
// 123
// 123
// where n = 3




function numberPattern(n){
    for(let i = 0; i < n; i++){
        let line = ""
        for(let j = 0; j < n; j++ ){
            line += j+1
        }
        console.log(line);
    }
}

numberPattern(3) 
