

// var é global
// let só funciona no bloco em que foi criada ou seja escopo local
// const não pode ser reatribuida, pode ser modificada e tem escopo local


//aparentemente, é mais fácil de se encontrar erro no código evitando usar "var"

{
var numero1 = 4
let numero2 = 5
const numero3 = true


console.log(numero1)
console.log(numero2)
console.log(numero3)
}

let numero2 = 1

console.log(numero2)
