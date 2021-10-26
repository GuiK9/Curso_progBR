//Spread operator
var pessoa = {
    name: "josé da silva",
    idade: 32
}

var contato = {
    telefone: 8765432,
    email: "jose@gmail.com"
}

var copia = {...pessoa, cidade: "Rio De Janeiro", contato, formacao: "pediatra"}//funciona pra array também
copia.idade = 88

console.log(pessoa)
console.log(copia)




