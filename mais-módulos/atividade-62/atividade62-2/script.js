let usuarios = ["adriano", "márcia", "josé"]

function inserirUsuario(nome){

    let promise = new Promise(function (resolve, reject){ //objeto que recebe como argumento uma função

    
        setTimeout(() => {
            usuarios.push(nome)
            let error = false
            if(!error){
                resolve()
            }else{
                reject({msg: "erro de qualquer coisa"})
            }

        }, 1000)
    })
    return promise
}

function listarUsuarios() {
    console.log(usuarios)
}

async function executar(){ //async pra transformar a função em função assíncrona

    await inserirUsuario("guilherme") //faz com que a execução da próxima linha do bloco de comando só ocorra depois que essa linha for terminada.
    listarUsuarios()
}
executar()