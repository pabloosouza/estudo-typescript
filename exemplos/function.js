"use strict";
function printaValoresNumericos(numero1, numero2) {
    console.log(numero1 + numero2);
}
function somarValoresNumericosETratar(numero1, numbero2, callback) {
    let resultado = numero1 + numbero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
console.log(somarValoresNumericosETratar(1, 3, aoQuadrado));
