let botao = document.getElementById("button")
botao.onclick = calc


function calc() {
    let CA = Number(document.getElementById("CAdulto").value)
    let CC = Number(document.getElementById("CCrianca").value)
    let CH = Number(document.getElementById("CHoras").value)
    
    if(CA <= 0 || CC <= 0 || CH <= 0 ){
        alert("Voçê precisa preencher todas as caixas")
    }else{
        let kg = Math.ceil(((CA * 0.1) + (CC * 0.05)) * CH) 
        let lc = Math.ceil((CA * 0.5) * CH) 
        let Lb = Math.ceil((CA * 0.05) + (CC * 0.15) * CH)

        let p0 = document.getElementsByTagName("p")[0]
        let p1 = document.getElementsByTagName("p")[1]
        let p2 = document.getElementsByTagName("p")[2]

        p0.innerHTML = `${kg} quilos de carne`
        p1.innerHTML = `${lc} latas de cerveja`
        p2.innerHTML = `${Lb} de 2L`
    }

}




/*


1 adulto -- 0.5 CERVEJA -- 100ml de BEBIDAS -- 100g de carne -- 1h
1 criança -- 300ml de BEBIDAS -- 50g de carne -- 1h




*/