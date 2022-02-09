import React, { useEffect, useState } from "react"
import { useLocation, useParams } from 'react-router-dom'
import Data from '../Data'


function useAula(){
    const id = useParams().id
    return Data.filter(aula => aula.id == id)[0]
}

export default function Aula() {
    const aula = useAula()


    return (
        <div className="page">
            <h1>{aula.title}</h1>
            <h3>{aula.desc}</h3>
        </div>
    )
}
