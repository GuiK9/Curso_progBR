import React, { useContext } from "react";
import { ContadorContexto } from "../ContadorContexto";
import Contador from "./Contador";

function Cabecalho(props) {
    const [contagem, setContagem] = useContext(ContadorContexto)

    return(
        <div className="cabecalho">
            <h3>Contador</h3>
            <div>{contagem}</div>
        </div>
    )

}



export default Cabecalho