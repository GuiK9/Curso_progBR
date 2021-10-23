/* 


let dobro = x => {console.log(this)}



/* let dobro = function() {
    console.log(this)
} 

let numero = {
    x: 8,
    d: dobro
}


dobro = dobro.bind(numero)

numero.d()

//console.log(numero.d())
 */



exports.hello = "world"
const dobro = () => console.log(this)
dobro()

