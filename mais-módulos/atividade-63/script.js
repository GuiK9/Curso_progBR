//high order function, filter

//revisar funções javascript


function novoAluno(nome, idade) {
    return {nome, idade}
}

let alunos = [
    novoAluno("mário", 23),
    novoAluno("josé", 45),
    novoAluno("márcia", 29),
    novoAluno("joão", 35)
]

let jogadores = [
    novoAluno("guilherme", 23),
    novoAluno("leo", 45),
    novoAluno("michele", 29),
    novoAluno("maria", 35)
]

function temMenosDe30(aluno) {
    return aluno.idade < 30 //vai retornar boolean
}
function temMaisDe30(aluno) {
    return aluno.idade > 30 //vai retornar boolean
}

/*  function filtro(callback){

    let alunosFiltrados = [] 

    for(let aluno of this){

        if(callback(aluno)) {
            alunosFiltrados.push(aluno)
        }

    }

    return alunosFiltrados
} 

alunos.filtro = filtro

jogadores.filtro = filtro */

console.log(jogadores.filter(temMenosDe30))



/* let alunosComMenosDe30 = alunos.filter(temMaisDe30) //tem que retornar verdadeiro ou falso e retornarar um array com aqueles elementos que foram verdeiros.
console.log(alunosComMenosDe30) */











/* for(let aluno of alunos) {
    if(aluno.idade < 30){
        console.log(aluno)
    }
} */