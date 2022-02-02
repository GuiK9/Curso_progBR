import React, { useState } from 'react'


function Contador(props){

    const [contagem, setcontagem] = useState(0)

    function maisUm(){
        let novoNumero = contagem + 1
        setcontagem(novoNumero)
    }

    function menosUm(){
        let novoNumero = contagem - 1
        setcontagem(novoNumero)
    }

    return (
        <div>
            <div>{contagem}</div>
            <button onClick={()=>setcontagem(contagem+1)}>+</button>
            <button onClick={()=>setcontagem(contagem-1)}>-</button>
        </div>
    )
}


export default Contador