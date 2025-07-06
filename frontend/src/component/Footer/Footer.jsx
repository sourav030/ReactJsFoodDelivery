import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <>
        <div className='footer' id='footer'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate corrupti adipisci vitae mollitia? Nostrum odit eaque sit asperiores saepe accusamus, quam rem omnis libero cum doloribus quidem excepturi. Dolore, cumque.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>

            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </div>

            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-213-478-7852</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
            
           
        </div>
         
        </>
    )
}

export default Footer
