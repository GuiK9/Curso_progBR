//farei um código que devolverá o mesmo que o método reduce, sem usar dele.


function novoAluno(nome, idade) {
    return { nome: nome, idade: idade }
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Márcia", 29),
    novoAluno("Joao", 35)
]
let total = 0

function somaIdade(idade) {
    total += idade
    return total
}

for (let aluno of alunos){
    somaIdade(aluno.idade)
}

console.log(total)