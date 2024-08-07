
function greeting(greetingHandler, name){
    greetingHandler(name)
}
// const object = {price:45000, brand:'lenovo', memory:'8gb'}
// greeting(object)

function greetingHandler(name){
    console.log('good morning', name)
}

function greetEvening(name){
    console.log('good evening', name)
}

greeting(greetingHandler, 'tom hanks')
greeting(greetingHandler, 'tom cruise')
greeting(greetingHandler, 'tom horse')
greeting(greetEvening, 'tom bon')