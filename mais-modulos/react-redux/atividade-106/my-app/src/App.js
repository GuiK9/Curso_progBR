import React from 'react';
import './App.css';
import Contador from './componentes/Contador';
import Cabecalho from './componentes/Cabecalho';
import { createStore, combineReducers } from 'redux'
import contadorReducer from './reducers/contadorReducer';
import { Provider } from 'react-redux'

function App() {
  
  const allReducers = combineReducers({ counter: contadorReducer })
  const store = createStore(allReducers)


  return (
    <div className="App">
      <Provider store={store}>
        <Cabecalho></Cabecalho>
        <Contador></Contador>
      </Provider>
    </div>
  )
}

export default App;
