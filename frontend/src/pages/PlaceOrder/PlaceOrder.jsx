import React, { useContext } from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
const PlaceOrder = () => {
  const navigate=useNavigate()
  const { getTotalCartAmount } = useContext(StoreContext)
  const finalTotal=getTotalCartAmount()+2;
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='city' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()==0?0:finalTotal}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/')}>Proceed To Payment</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
