let tela = document.getElementById("tela") 

let ctx = tela.getContext("2d") 


ctx.rect(10, 10, 100, 200)
ctx.strokeStyle = "red"
//ctx.strokeRect(10, 10, 100, 200)

 ctx.fillStyle = "blue"
//ctx.fillRect(10, 10, 100, 200) 


ctx.fill()
ctx.stroke()

ctx.clearRect(20, 20, 30, 30)








//contexto é onde a gente vai desenhar de fato esse contexto
/* ctx.moveTo(0, 0) //é como se o pincel estivesse se movido pro canto da tela
ctx.lineTo(250, 250)// e aqui leva ele pra localização (x, y)
//é o que vai dar a espessura da linha
ctx.lineTo(500, 0)
ctx.lineWidth = 5 
ctx.strokeStyle = "blue"
ctx.stroke() */
