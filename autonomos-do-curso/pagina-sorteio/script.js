let botao = document.getElementById("botao")
let h1 = document.getElementById("titulo")
let ns = []
let p = document.getElementsByTagName("p")[0]

botao.onclick = sorteio

function sorteio() {
  let na;
  if (ns.length == 10) {
    window.alert("já foram selecionados todos os números")
  } else {
    while (ns.indexOf(na) != -1) {
      na = Math.ceil(Math.random() * 10)
      console.log(na)
    }
    let f = inserirNum()

    function inserirNum() {
      if (ns.indexOf(na) === -1) {
        h1.innerHTML = na
        ns.push(na)
      }
      if (ns.length <= 11) {
        p.innerHTML = ns
      }
    }
  }

  /*ns.sort(function (a, b) {
    return a - b
  })*/
  console.log(ns)
}
