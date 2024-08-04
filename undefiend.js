
/*
8 ways to get undefiend

1.variable that is not initialized
2.function with no return
3. parameter that is not passes will be undefiened 
4.if you don't return anything. just return likhe boshaye rakhle undefiened paba

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



function noNegative(a, b){
    if(a < 0 || b < 0){
        return
    }
    return a + b
}
const total = noNegative(2, -6)
console.log(total)
