//farei um código que devolverá o mesmo que o método map, sem usar dele.
let alunosMais5 = []

function novoAluno(nome, idade) {
    return { nome: nome, idade: idade}
}

let alunos = [
    novoAluno("mário", 23),
    novoAluno("josé", 45),
    novoAluno("márcia", 29),
    novoAluno("joão", 35)
]


function alunoDaquiA5Anos(aluno){
    return aluno.idade += 5
    
}


for (let aluno of alunos){
    alunoDaquiA5Anos(aluno)
    alunosMais5.push(aluno)
}

console.log(alunosMais5)
