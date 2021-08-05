var media = 0
function NA(nome, n1, n2){ //NA == Novo Aluno

    return {
    nome: nome,
    nota1: n1,
    nota2: n2,
    media: function(){
        return(this.nota1+this.nota2) / 2
        }  
    }
}

var turma = [
    NA("Igor", 9, 6),
    NA("João", 7, 4),
    NA("Guilherme", 10, 10),
    NA("Marcia", 1, 10),
    NA("Letícia", 6.7, 5.1),
    NA("thigas", 0.1, 4)

]

/* var aluno = turma[2]
console.log(aluno)
console.log(aluno.media()) 
turma.forEach(function(elemento){
    console.log(elemento)
})*/

for (var i = 0; turma.length > i; i++) {
    console.log(`    Aluno: ${turma[i].nome} 
    Nota 1: ${turma[i].nota1} 
    Nota 2: ${turma[i].nota2}
    Média : ${turma[i].media()}`)
}
 

