let calc = require("./calc")

let args = process.argv.slice(2)


let v = args[0]
let a = Number(args[1])
let b = Number(args[2])
let c = ""


if (v == "s") {
    c = calc.soma(a, b)
} else if (v == "m"){
    c = calc.mult(a, b)
} else {
    console.log("Opção inválidada")
}

console.log(c)

