
import { useEffect, useState } from 'react'
import './App.css'
import { getService } from './service/service.config'
import PrintAgents from './components/PrintAgents'

function App() {

  return (
    <>
      <button>CONSOLA</button>
      <PrintAgents/>
    </>
  )
}

export default App
