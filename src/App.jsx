import { useState } from 'react'
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx'

import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <HashRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
    </HashRouter>
  )
}

export default App
