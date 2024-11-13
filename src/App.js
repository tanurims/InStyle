import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Contactus from './pages/Contactus/Contactus'
import AboutUs from './pages/AboutUs/AboutUs'





const App = () => {

  
  return (
    <>
      <div className="app">
          <Navbar/>
        
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Contactus' element={<Contactus />} />
            <Route path='/AboutUs' element={<AboutUs />} />
            
            
          </Routes>
        </div>
        
        
    
    </>
    

   
  )
}

export default App
