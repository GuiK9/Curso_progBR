let retroceder = document.getElementsByTagName("img")[0]
let ir = document.getElementsByTagName("img")[1]
let menos = document.getElementsByTagName("img")[2]
let mais = document.getElementsByTagName("img")[3]
let pause = document.getElementsByTagName("img")[4]
let play = document.getElementsByTagName("img")[5]
let parar = document.getElementsByTagName("img")[6]
let video = document.getElementById("video1")
//let controles = document.getElementById("controles")

retroceder.onclick = voltar
ir.onclick = pular
menos.onclick = diminuir_vel
mais.onclick = aumentar_vel
pause.onclick = pausar
play.onclick = continua
parar.onclick = para

/*video.onmouseenter = sobecontrol
controles.onmouseout = semcontrole*/



function voltar() { 
    video.currentTime -= 15
}

function pular() {
    video.currentTime += 15
}

function diminuir_vel() {
    video.playbackRate -= 0.1
}

function aumentar_vel() {
    video.playbackRate += 0.1

}

function pausar() {
    video.pause()
}

function continua() {
    video.play()
}

function para() {
    video.pause()
    video.currentTime = 0
    video.playbackRate = 1
}

/*function sobecontrol() {
    controles.style.visibility = "visible"
}

function semcontrole() {
    controles.style.visibility = "hidden"
}*/