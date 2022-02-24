/*
Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
*/

function converterIdadeEmAnosParaDias(IdadeEmAnos) {
    const diasDoAno = 365
    return diasDoAno * IdadeEmAnos
}

console.log(converterIdadeEmAnosParaDias(25))  // retornará 9125

