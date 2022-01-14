
let jogador = document.getElementById("jogador")

let xInicial = 0
let yInicial = 0 


function moverJogadorPara(x, y) {
    let posx = x + "px"
    let posy = y + "px"
    jogador.style.top = posx
    jogador.style.left = posy

}

function ande(){setInterval(function(){

    moverJogadorPara(xInicial++, yInicial++)

 }, 50)
}
