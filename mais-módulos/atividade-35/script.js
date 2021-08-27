
//let a = {nome:"Guilherme", n1: 7.3}

//localStorage.setItem("aluno", JSON.stringify(a))

let a = JSON.parse(localStorage.getItem("aluno"))
let h1 = document.getElementById("nome")

h1.innerHTML = a.nome + " " + a.n1

localStorage.clear()


//cada domínio gera uma pasta pra si, caso o domínio faculdade.org quiser um dado chamado aluno e tiver um mesmo dado chamado aluno em escola.org eles não entraram em conflito






/*localStorage.setItem("numero", 5.7) // no localStorage só armazena string a não ser com o JSNO

let n = localStorage.getItem("numero")
console.log(n)*/

/*function atualizar(element) {
    let valor = element.value
    console.log(valor)

    let h1 = document.getElementById("nome")
    h1.innerHTML = valor
    localStorage.setItem("Titulo", valor)
}

onload = function() {
    let nome = localStorage.getItem("Titulo")
    let h1 = document.getElementById("nome")
    h1.innerHTML = nome
}*/

let botao = document.getElementById("botao")
botao.addEventListener("click", remove)

function remove() {
    localStorage.removeItem("Titulo")
}
