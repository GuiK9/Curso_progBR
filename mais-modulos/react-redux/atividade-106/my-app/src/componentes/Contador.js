import React from "react"
import { useDispatch, useSelector } from 'react-redux'


function Contador(props) {


    const contador = useSelector((state) => { return state.counter })
    const dispatch = useDispatch()

    return (
        <div>
            <div>{contador}</div>
            <button onClick={() => { dispatch({type:'INCREMENT'}) }}>+</button>
            <button onClick={() => { dispatch({type:'DECREMENT'}) }}>-</button>
        </div>
    )
}


export default Contador