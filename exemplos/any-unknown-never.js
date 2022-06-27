"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;
let stringTest = 'verificar';
stringTest = anyEstaDeVolta;
let unknownValue;
unknownValue = 3;
unknownValue = 'opa';
unknownValue = true;
unknownValue = 'vai sim';
let stringTest2 = 'agora vai';
if (typeof unknownValue === 'string') {
    stringTest2 = unknownValue;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro', 500);
