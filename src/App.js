import React from 'react'
import Home from './Components/Home/Home'
import Navbars from './Components/Navs/Navbars'
import { Route, Routes } from 'react-router-dom'
import Error from './Components/error/Error'

const App = () => {
  return (
    <div>
      <Navbars />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </div>
  )
}

export default App
