console.log('Olá mundo!')

var validator = require('validator');

let verif = validator.isEmail('dudlucas123@gmail');

console.log(verif);

if(verif){
    console.log('É email.');
} else{
    console.log('Não é email.');
}

var calculadora = require("./calculadora.js")

console.log(calculadora.somar(10, 5));
console.log(calculadora.subtrair(10, 5));
console.log(calculadora.multiplicar(10, 5));
console.log(calculadora.dividir(10, 5));