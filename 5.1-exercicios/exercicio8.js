/*
Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) 
e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação.
*/

function multiplicar(numeroA, numeroB) {
    let resultado = 0
    /* a otimização feita para diminuir a quantidade de chamadas recursivas pode ser
    realizada aqui para diminuir a quantidade de loops */

    for(let i = 0; i < numeroB; i++)
    resultado += numeroA
    return resultado
}

console.log(multiplicar(5, 5)) // retornará 25
console.log(multiplicar(0, 7))  // retornará 0
    