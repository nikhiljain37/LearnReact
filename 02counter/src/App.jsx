import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(0)

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    /**
     * they will + counter by only 1 
     * if we have to do multiple times we can'use this method beacuse
     * useSate conver all this in one batch 
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    */
   //that;s why we have to use this for counter +3
   //setCounter(() => {}) // we can use any name other tha
   //prevCounter
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
