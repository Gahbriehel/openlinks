import React from 'react';
import Nav from './components/nav';
import { BrowserRouter } from 'react-router-dom'
// import Rout from './components/rout';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        {/* <Rout/> */}
      </BrowserRouter>
    </>
  )
}

export default App