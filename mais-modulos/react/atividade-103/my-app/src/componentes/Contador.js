import React, { useContext } from 'react'
import { ContadorContexto } from '../ContadorContexto'

function Contador(props){

    const [contagem, setcontagem] = useContext(ContadorContexto)

    return (
        <div>
            <div>{contagem}</div>
            <button onClick={()=>setcontagem(contagem+1)}>+</button>
            <button onClick={()=>setcontagem(contagem-1)}>-</button>
        </div>
    )
}


export default Contador