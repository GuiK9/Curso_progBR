import React, { useContext } from "react";
import {useSelector} from 'react-redux'

function Cabecalho(props) {

    const contador = useSelector((state) => { return state })

    return(
        <div className="cabecalho">
            <h3>Contador</h3>
            <div>{contador}</div>
        </div>
    )

}



export default Cabecalho