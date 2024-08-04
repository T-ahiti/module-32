
/*
8 ways to get undefiend

1.variable that is not initialized
2.function with no return
3. parameter that is not passes will be undefiened 

*/ 

let first;
console.log(first)

function second(a, b){
    const total = a + b
}
const result = second()
console.log(result)

function third(a, b, c, d){
    const total = a + b + c + d
    console.log(a,b,c,d)
}

third(2,5)