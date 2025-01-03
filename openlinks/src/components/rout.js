import React from 'react'
import {Routes, Route} from 'react-router'
import Home from './home'
import About from './about'
import ContactUs from './contactUs'
import Wholesale from './wholesale'

const Rout = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/wholesale' element={<Wholesale/>}/>
    </Routes>
    </>
  )
}

export default Rout