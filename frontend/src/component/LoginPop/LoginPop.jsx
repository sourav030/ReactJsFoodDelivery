import React, { useState } from 'react'
import './LoginPop.css'
import { assets } from '../../assets/assets'
const LoginPop = ({ setShowLogin }) => {
  const [currState, setCurrStarte] = useState("Login")
  return (
    <div className='login-pop'>
      <form action="" className="login-pop-container">
        <div className="login-pop-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-pop-inputs">
          {
            currState == "Login" ? <></> : <input type="text" name="" id="" placeholder='Your name' required />
          }

          <input type="email" placeholder='your email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button>{currState == "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-pop-condition">
          <input type="checkbox" required />
          <p>By continuing i agree to the term of use & privacy policy</p>
        </div>
        {
          currState=="Login"?
          <p>Create a new account? <span onClick={()=>setCurrStarte("Sign Up")}>click here</span></p>:
          <p>Already have an account? <span onClick={()=>setCurrStarte("Login")}>Login here</span></p>
        }
        
        
      </form>
    </div>
  )
}

export default LoginPop
