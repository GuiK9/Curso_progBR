import React from 'react';
import './App.css';
import Contador from './componentes/Contador';
import Cabecalho from './componentes/Cabecalho';

function App() {
  return (
    <div className="App">
      <Cabecalho></Cabecalho>
      <Contador></Contador>
    </div>
  )
}

export default App;
