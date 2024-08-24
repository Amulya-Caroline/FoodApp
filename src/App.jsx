import React, { useState } from 'react'
import NavBar from './Components/NavBar/NavBar'
import { Route,Routes } from 'react-router-dom'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Cart from './Pages/Cart/Cart'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'

const App = () => {
  const [showLogin,setshowLogin] = useState(false)
  return (
    <>
    {showLogin ?<LoginPopup setshowLogin={setshowLogin}/>:<></>}
      <div className='app'>
      <NavBar setshowLogin={setshowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />

      </Routes>
      
    </div>
    <Footer/>
    </>
  
  )
}

export default App
