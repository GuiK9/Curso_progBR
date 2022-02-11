import React from 'react'

import { loginAction, logoutAction } from '../actions/loginActions'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, } from 'react-router-dom'


export default function AuthButton(props) {
    const login = useSelector(state => state)
    const dispatch = useDispatch()
    const navigate = useNavigate('/')

    function pathname() {
        let pathname = window.location.href
        pathname = pathname.slice(-6)
        return pathname
    }


    return (
        login ?
            <button
                onClick={() => {
                    dispatch(logoutAction())
                }}>
                logout
            </button> :
            <button
                onClick={() => {
                    dispatch(loginAction())
                    if (pathname() === 'negado') {
                        navigate('/aulas')
                    }
                }}>
                login</button>



    )

}