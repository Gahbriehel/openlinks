import React from 'react'
import { Routes, Route } from 'react-router'
import Home from '../home.jsx'
import About from '../about.jsx'
import ContactUs from '../contactUs.jsx'
import Wholesale from '../wholesale.jsx'
import Cart from '../cart.jsx'
import Signup from '../signup.jsx'
import Login from '../login.jsx'
import Profile from '../profile.jsx'

const Rout = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/wholesale' element={<Wholesale />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default Rout