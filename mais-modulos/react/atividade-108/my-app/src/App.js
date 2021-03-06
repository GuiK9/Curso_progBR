import React from 'react'
import './App.css'

import Nav from './components/Nav'
import Home from './components/Home'
import Aulas from './components/Aulas'
import Sobre from './components/Sobre'
import Aula from './components/Aula'
import Assistir from './components/Assistir'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import loginReducer from './reducer/loginReducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import PrivateRoute from './components/PrivateRoute'
import Negado from './components/AcessoNegado'

const store = createStore(loginReducer)



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='App'>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/aulas' element={<PrivateRoute><Aulas /></PrivateRoute>} />
            <Route path="/aulas/:id" element={<PrivateRoute><Aula /></PrivateRoute>} />
            <Route path='/assistir' element={<Assistir />} />
            <Route path='/negado' element={<Negado />} />
            <Route path='*' element={
              <div className="page">
                Essa rota não existe
              </div>
            } />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
