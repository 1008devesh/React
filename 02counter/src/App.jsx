import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]= useState(15)
//let counter=15;
const addvalue=()=>{
  console.log("clicked",counter)

setCounter(counter+1)
}

const removevalue=()=>{
  setCounter(counter-1)
}
  return (
    <>
      
  <h1>React in counter</h1>
  <h2>Counter value:{counter}</h2>
  <button onClick={addvalue}>Add value:{counter}</button>
  <br />
  <br />
  <button onClick={removevalue}>Remove value:{counter}</button>
    </>
  )
}

export default App
