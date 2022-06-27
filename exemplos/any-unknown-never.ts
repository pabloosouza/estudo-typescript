let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;

let stringTest: string = 'verificar';
stringTest = anyEstaDeVolta;

let unknownValue: unknown;

unknownValue = 3;
unknownValue = 'opa';
unknownValue = true;
unknownValue = 'vai sim';

let stringTest2: string = 'agora vai';

if (typeof unknownValue === 'string'){
    stringTest2 = unknownValue;
}

function jogaErro(erro: string, codigo: number): never{
    throw {error: erro, code: codigo}
}

jogaErro('deu erro', 500    )