import { useState } from 'react'
import Button from './Components/_Button'
import './App.css'

function App() {
  return (
    <>
      <h1>Contador de Puteadas</h1>
      <div className="card">
        <Button text={"Cantidad: "}/>
      </div>
    </>
  )
}

export default App
