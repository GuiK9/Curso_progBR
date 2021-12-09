//FECTCH

/*Tudo que a gente fez foi pré feito pelo programador, considerado estático, mas agora, a gente pode buscar por dados dinâmicos e que estão armazenados em outro lugar*/

//api, por hora, vai ser um como endereço


let botao = document.getElementById("conversor")
let url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL";


botao.onclick = converter

function converter() {

    let valor = document.getElementById("valor").value

    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        let rate = data.BTCBRL.high
        let resultado = `${valor} é ${rate * valor} em Bitcoin`
        document.getElementById("resultado").innerHTML = resultado
    });

}

