//SOBRE VALOR E REFERÊNCIA


//ESSES TRÊS PONTINHOS PRA FAZER CÓPIA DE VALORES NÃO PRIMITIVOS 

let turmaA = ["Guilherme", "Thiago", "Paula"]

let turmaB = turmaA.slice() //forma 1 de literalmente copiar o array turmaA para turmaB e imperdir que laterações na turmaB ocasionem alteraões na turmaA

let turmaB = [...turmaA] //forma 2

turmaB.push("João")

console.log(turmaB)
console.log(turmaA)






let alunoA = {nome: "Guilherme", idade: 18}

alunoB = Object.assign({}, alunoA) //Primeira forma

alunoB = {...alunoA} //Segunda forma

alunoB.idade = 25

console.log(alunoB)
console.log(alunoA)