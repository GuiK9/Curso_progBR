import React from "react";

import Data from '../Data'

export default function Aulas () {

    return(
        <div className="page">
            <h1>Aulas</h1>
            <ul className="aulas">
                {Data.map( aula => 
                    <li key={aula.id}>{aula.title}</li>)}
            </ul>

        </div>
    )
}