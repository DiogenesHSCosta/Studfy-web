
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import NavBar from './Components/NavBar/NavBar.jsx'
import Rodape from './Components/Rodape/Rodape.jsx'


function App() {

  return (
    <>
      <NavBar/>
      <Outlet/>
      <Rodape/>
    </>
  )
}

export default App
