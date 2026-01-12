import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import User from './pages/User'
import Github from './pages/Github'


function App() {
  return (
    <>
    <NavBar />

      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />} />
          <Route path='/user/:userid' element={<User />} />
          <Route path='/github' element={<Github />} />
      </Routes>

    <Footer />
    </>
  )
}

export default App