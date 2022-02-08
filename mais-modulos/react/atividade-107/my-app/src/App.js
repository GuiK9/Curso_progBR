import React from 'react'
import './App.css'

import Nav from './components/Nav'
import Home from './components/Home'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Aulas from './components/Aulas'
import Sobre from './components/Sobre'
import Aula from './components/Aula'




function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/aulas' element={<Aulas />} />
          <Route path="/aulas/:id" element={<Aula />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={
            <div className="page">
              Essa rota não existe
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
