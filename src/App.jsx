import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Contact from './pages/Contact'


function App() {
  return (
    <>
    <NavBar />

      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />} />
      </Routes>

    <Footer />
    </>
  )
}

export default App