const lista = document.getElementById("lista")

let Num = Number(lista.getAttribute("num")) //pega um atributo e o setAtribute, seta um atributo

let conteudo = ""


for (i = 0; i < Num; i++) {
    conteudo += "<li>" + i + "</li>"
}

lista.innerHTML = conteudo