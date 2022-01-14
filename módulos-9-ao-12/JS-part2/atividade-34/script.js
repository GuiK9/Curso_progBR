let a1 = {
    nome:"igor",
    nota: 8.5
}

let b1 = JSON.stringify(a1)

console.log(a1)
console.log(b1)


let a2 = '{"nome":"igor", "nota":8.5}'

let b2 = JSON.parse(a2)


console.log(a2)
console.log(b2)