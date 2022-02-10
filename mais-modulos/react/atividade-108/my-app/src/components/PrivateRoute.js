import { useEffect } from "react";
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



export default function PrivateRoute({ children }) {
    const isLogged = useSelector(state => state)
    const navigate = useNavigate()

    useEffect(()=>{
        if(!isLogged){
            return navigate('/')
        }
    }, [])

    return(
        children
    )
} 

//Entt como estou retornando um child como padrão, tem alguma falha de segurança muito óbvia? algum conselho?