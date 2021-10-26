//desestruturar obj e pegar apenas os dados que eu quiser



var aluno = {
    matrícula: 1234,
    nome: "marcos",
    telefone: 982345479,
    cidade: "barra da pira!"
}
var aluno1 = {
    matrícula: 12345,
    nome: "joao",
    telefone: 983343479,
    cidade: "barra da pira!"
}

var alunos = [aluno, aluno1]
/* console.log(alunos) */

var [marcos, joao, ] = alunos
console.log(nome)
console.log(nome)

/* var {nome, ...copia} = aluno
copia.matricula = 654321
console.log(copia)
console.log(nome) */

//forma interessante de se trabalhar com vários obj


/* var {matrícula, nome, numero} = aluno
console.log(matrícula)
console.log(nome)
console.log(numero) */

