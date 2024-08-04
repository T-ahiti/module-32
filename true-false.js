
/*
Truthy:
1.true
2.any number +/- will be truthy except 0
3.any string except emty string
4. {}empty object or full object both 
5. {}empty array or full array both 

Falsy:
1. false
2.0
3. '' emty string
4.undefiend 
5. null
*/ 
const x1 = false;
if(x1){
    console.log('value of x1 is truthy')
}
else{
    console.log('value of x1 is falsy')
}

const x21 = 4;
if(x21){
    console.log('value of x21 is truthy')
}
else{
    console.log('value of x21 is falsy')
}

const x22 = 0;
if(x22){
    console.log('value of x22 is truthy')
}
else{
    console.log('value of x22 is falsy')
}

const x31 = 'Salman khan';
if(x31){
    console.log('value of x31 is truthy')
}
else{
    console.log('value of x31 is falsy')
}

// empty string er vitore ekta space thakleo truth hobe
const x32 = '';
if(x32){
    console.log('value of x32 is truthy')
}
else{
    console.log('value of x32 is falsy')
}


let x4;
console.log(x4)
if(x4){
    console.log('value of x4 is truthy')
}
else{
    console.log('value of x4 is falsy')
}


let x5 = null;
console.log(x5)
if(x5){
    console.log('value of x5 is truthy')
}
else{
    console.log('value of x5 is falsy')
}


let x61 = {};
console.log(x61)
if(x61){
    console.log('value of x61 is truthy')
}
else{
    console.log('value of x61 is falsy')
}


let x62 = [];
console.log(x62)
if(x62){
    console.log('value of x62 is truthy')
}
else{
    console.log('value of x62 is falsy')
}
