const pessoa = {
    nome: 'Marta',
    idade: 28,
    profissao: 'desenvolvedora'
}

let andre: (nome: string, idade: number, profissao: string) => {
    nome: 'Andre',
    idade: 25,
    profissao: 'professor'
}

let paula: (nome: string, idade: number, profissao: string) => {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface IPessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

interface IEstudante extends IPessoa {
    materias: string[]
}

const vanessa: IPessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const maria: IPessoa = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const jessica: IEstudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Algoritmos', 'Banco de dados']
}

function listar(lista: string[]){
    for (const item of lista) {
        console.log('-', item)
    }
}

listar(jessica.materias);