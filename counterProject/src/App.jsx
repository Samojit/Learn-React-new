import { useState } from 'react'
import './App.css'

function App() {

  let [counter , setCounter] = useState(0);

  const increaseValue = ()=>{
    if(counter < 20) setCounter(counter+1);
  }
  const decreaseValue = ()=>{
    if(counter > 0) setCounter(counter-1);
  }

  return (
    <>

    <h1>Test Your Mouse</h1>

    <h1>Counter : {counter}</h1>

    <button onClick={increaseValue}>Increase</button>
    <button onClick={decreaseValue}>Decrease</button>

    </>
  )
}

export default App
