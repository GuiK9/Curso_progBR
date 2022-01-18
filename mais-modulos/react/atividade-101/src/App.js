import React from 'react';
import Header from './Header.js'
import './App.css';
import Counter from './Counter.js'

function App() {
  return(
    <div>
    <Counter count={1}></Counter>
    </div>
  )
}

export default App;

//O estado muda depois que a pagina for carregada

//componente: conjunto de elementos que posso criar e fazer uma coisa só, header.js é um componente
