import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { assets } from './../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
const Navbar = ({ setShowLogin }) => {

    const [menu, setmenu] = useState("home")
    const {getTotalCartAmount}=useContext(StoreContext)
    return (
        <div className='navbar'>
            <Link to="/">
                <img src={assets.logo} alt="" className='logo' />
             </Link>
            <ul className='navbar-menu'>
                <Link to='/' onClick={() => setmenu("home")} className={menu == "home" ? "active" : ""}>home</Link>
                <a href='#explore-menu' onClick={() => setmenu("menu")} className={menu == "menu" ? "active" : ""}>menu</a>
                <a href='#app-download' onClick={() => setmenu("mobile-app")} className={menu == "mobile-app" ? "active" : ""}>mobile app</a>
                <a href='#footer' onClick={() => setmenu("contact-us")} className={menu == "contact-us" ? "active" : ""}>contact app</a>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt="" />
                <div className='navbar-search-icon'>
                    <Link to="/cart">
                        <img src={assets.basket_icon} alt="" />
                    </Link>

                    <div className={getTotalCartAmount()>0?"dot":""}></div>
                </div>
                <div className='butt'>
                    <button onClick={() => setShowLogin(true)} className=''>sign in</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
