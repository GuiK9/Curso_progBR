"use strict" //faz com que seja obrigatório declarar toda variável que você use





imprimir()
function imprimir(){

   x = 7 //se eu não declarar o "var" ele cria o x no escopo global
    console.log(x)
}

console.log(x)
console.log(window)