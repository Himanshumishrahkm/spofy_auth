import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/LogIn';

const App = () => {
  return (
     <BrowserRouter>
     
        <Navbar />
      

      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/Register" element={<Register/>} />
        <Route  path="/login" element={<Login/>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
