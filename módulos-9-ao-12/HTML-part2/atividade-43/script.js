let tela = document.getElementById("tela") 

let ctx = tela.getContext("2d") 

let circle ={
    x: 250,
    y: 250,
    raio:100,
    inicio: 0, 
    fim: 0,
    antiHor: true
}

function drawCircle(c){

    ctx.beginPath()
    ctx.rect(0, 0, 500, 500)
    ctx.fillStyle = "beige"
    ctx.fill() 
    



    ctx.beginPath()
    ctx.strokeStyle = "red"
    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim, c.antiHor) 
    ctx.fillStyle = "blue"
    ctx.fill()
    ctx.stroke()

}
setInterval(function(){

    if (circle.fim < 2 * Math.PI){
        circle.fim += 0.01
        circle.x += 0.236
    } else{
        circle.raio = 0
    }

    drawCircle(circle)

}, 0.1) 





/*ele (metodo arc()) recebe como argumento 
X: distanciamento da borda pro centro;    
y: distancimento do topo pro centro;
raio;
inicio, desenhado da esquerda pra direita medido em radiano;
fim;
*/
