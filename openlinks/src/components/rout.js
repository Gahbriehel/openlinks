import React from 'react'
import {Routes, Route} from 'react-router'
import Home from './home'
import About from './about'

const Rout = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </>
  )
}

export default Rout