let tela = document.getElementById("tela") 

let ctx = tela.getContext("2d") 

let x = 250
let y = 250
let raio = 100
let inicio = 0
let fim = 2 * Math.PI




ctx.beginPath()
ctx.strokeStyle = "red"
ctx.arc(x, y, raio, inicio, fim) 
ctx.fillStyle = "blue"
ctx.fill()
ctx.stroke()



/*ele (metodo arc()) recebe como argumento 
X: distanciamento da borda pro centro;    
y: distancimento do topo pro centro;
raio;
inicio, desenhado da esquerda pra direita medido em radiano;
fim;
*/
