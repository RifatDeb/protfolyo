
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './Routes/About'
import Projects from './Routes/Projects'
import Home from './Routes/Home'
import { Routes, Route} from 'react-router-dom'
import Contract from './Routes/Contract';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contract' element={<Contract/>} />
        <Route path='/About' element={<About />} />
        <Route path='/Projects' element={<Projects />} />
      </Routes>
    </>
    
  )
}
