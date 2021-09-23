let tela = document.getElementById("tela")
let ctx = tela.getContext("2d")
let img = new Image()
img.src = "download.jpeg"
img.onload = desenharImg


function desenharImg() {
    ctx.drawImage (this, 10, 10, this.naturalWidth / 2, this.naturalHeight / 2)
}