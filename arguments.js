
function sum(a,b,c,d){
    console.log(arguments)
    // arguments eta only function er mopdhhe pabo. baire pabo na
    const result = a+b+c+d
    return result
}

const total = sum(234, 345, 54, 76, 90,346, 8)
// ei bracket er modhhe elements gula ke arguments bole 
console.log(total)