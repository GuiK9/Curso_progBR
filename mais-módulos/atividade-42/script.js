let tela = document.getElementById("tela") 

let ctx = tela.getContext("2d") 

ctx.beginPath() //caminho da linha
ctx.lineWidth = 4
ctx.strokeStyle = "red"
ctx.moveTo(250, 20)
ctx.lineTo(250, 480)
ctx.stroke()


ctx.beginPath()
ctx.lineWidth = 7
ctx.strokeStyle = "blue"
ctx.fillStyle = "green"
ctx.moveTo(20, 250)
ctx.lineTo(480, 250)
ctx.lineTo(250, 20)
//ctx.closePath()
ctx.fill()
ctx.stroke()
