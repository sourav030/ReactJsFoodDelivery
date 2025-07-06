import React, { useState } from 'react'
import Navbar from './component/NavBar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './component/Footer/Footer';
import LoginPop from './component/LoginPop/LoginPop';


const App = () => {
  const [showLogin, setShowLogin]=useState(false)
  return (
    <>
    {
      showLogin?<LoginPop setShowLogin={setShowLogin}/>:<></>
    }
     <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer/>
    </>
   
  )
}

export default App
