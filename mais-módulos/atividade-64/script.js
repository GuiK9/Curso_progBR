let alunos = [
    novoAluno("mário", 23),
    novoAluno("josé", 45),
    novoAluno("márcia", 29),
    novoAluno("joão", 35)
]



function novoAluno(nome, idade){
    return {nome, idade}
}


function AlunoDaquiA5Anos(aluno){
    aluno.idade += 5 //valor e referência
    return aluno

/*     return {nome: aluno.nome,
            idade: aluno.idade + 5} */
}

/* 
function nomeIdade(aluno) {
    return `${aluno.nome} tem ${aluno.idade} anos`
} */

console.log(alunos.map(AlunoDaquiA5Anos)) //mapeei o array principal e retornei um novo array
console.log(alunos)