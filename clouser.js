
function kitchen () {
    let roast = 0 
    return function (){
        roast ++
        return roast
    }
}

const firstServer = kitchen()
console.log(firstServer())
console.log(firstServer())
console.log(firstServer())
console.log(firstServer())
console.log(firstServer())

const firstServer2 = kitchen()
console.log(firstServer2())
console.log(firstServer2())


console.log(firstServer())
console.log(firstServer())
console.log(firstServer2())
console.log(firstServer())

// clouser - nijer kache nijer man rakhe.. 
// ekta function er vitore arekta function call korte hobe