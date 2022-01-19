import React, { useCallback, useEffect, useState } from 'react';
import Header from './Header.js'
import './App.css';
import Counter from './Counter.js'

function App() {

  const [show, setShow] = useState(true)

  let time = 0
  useEffect(() => {
    let timer = setInterval(() => {
      time++
      console.log(time)

      if (time >= 5) {
        clearInterval(timer)
        setShow(false)
      }
    }, 1000)
  }, [])




  if (show) {
    return (
      <div>
        <Counter count={3}></Counter>
      </div>
    )
  } else {
    return (
      <div>
        Sem contador
      </div>
    )
  }
}

export default App;

//O estado muda depois que a pagina for carregada

//componente: conjunto de elementos que posso criar e fazer uma coisa só, header.js é um componente
