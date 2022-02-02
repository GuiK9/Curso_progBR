import React from 'react';
import './App.css';
import Contador from './componentes/Contador';
import Cabecalho from './componentes/Cabecalho';
import { ContadorProvider } from './ContadorContexto';

//o contexct api vai criar um contexto e o estado seja ele qualquer pode ser manipulado em qualquer componente desse estado

function App() {
  return (
    <div className="App">
      <ContadorProvider>
        <Cabecalho></Cabecalho>
        <Contador></Contador>
      </ContadorProvider>

    </div>
  )
}

export default App;
