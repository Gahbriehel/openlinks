import React from 'react';
import Nav from './components/nav';
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/footer';
// import Rout from './components/rout';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Footer/>
        {/* <Rout/> */}
      </BrowserRouter>
    </>
  )
}

export default App