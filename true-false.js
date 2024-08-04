
/*
Truthy:
1.true
2.any number +/- will be truthy except 0
3.any string except emty string


Falsy:
1. false
2.0
3. '' emty string
*/ 
const x1 = false;
if(x1){
    console.log('value of x is truthy')
}
else{
    console.log('value of x is falsy')
}

const x21 = 4;
if(x21){
    console.log('value of x is truthy')
}
else{
    console.log('value of x is falsy')
}

const x22 = 0;
if(x22){
    console.log('value of x is truthy')
}
else{
    console.log('value of x is falsy')
}

const x31 = 'Salman khan';
if(x31){
    console.log('value of x is truthy')
}
else{
    console.log('value of x is falsy')
}

// empty string er vitore ekta space thakleo truth hobe
const x32 = '';
if(x32){
    console.log('value of x is truthy')
}
else{
    console.log('value of x is falsy')
}

