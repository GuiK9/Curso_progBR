//CALLBACK É UMA FUNÇÃO COMO ARGUMENTO DE UMA OUTRA FUNÇÃO

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

inserirUsuario("Guilhemre").then(listarUsuarios)




/* let usuarios = ["adriano", "márcia", "josé"]

function inserirUsuario(nome, callback){
    usuarios.push(nome)
    setTimeout(() => {
        callback()
    }, 1000)
    
}

function listarUsuarios() {
    console.log(usuarios)
}

inserirUsuario("Guilhemre", listarUsuarios)
 */




/* function ola(){
    console.log('Olá')
} 


function tchau(){
    console.log('tchau')
} 
function saudacao(s, nome) {
    s()
    console.log(nome)
}

saudacao(tchau, "Igor") */