//tratamento de erros

let nome = ""



try {

    if (nome == ""){
        throw "O nome não pode ser vazio"
    }

    console.log(nome)
}catch(err){ //O err recebe o erro próprio mas "ignora"

    console.log("Houve um erro", err) 
} finally {

    console.log("boa noite")
}



