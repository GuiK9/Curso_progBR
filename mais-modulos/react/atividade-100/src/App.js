import React from 'react';
import Header from './Header'
import './App.css';

function App() {
  return(
    <Header name='Guilherme' links={["Sobre", "Comprar", "Contato"]}></Header>
  )
}

export default App;

//componente: conjunto de elementos que posso criar e fazer uma coisa só, header.js é um componente
