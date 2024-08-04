
/*
Truthy:
1.any number +/- will be truthy except 0

Falsy:
1. false
2.0
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