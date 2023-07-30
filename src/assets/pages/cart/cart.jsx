import React from 'react'
import { ShopContext } from '../../context/shop-context';
import { useContext } from 'react';
import { CartItem } from './cart-item';
import {PRODUCTS} from '../../../products'
import './cart.css'
import {useNavigate} from 'react-router-dom'
import backgroundImage from '../../images/background-espresso.jpg'




export const Cart = () => {
  const{ cartItems, getTotalCartAmount } = useContext(ShopContext)

  const totalAmount = getTotalCartAmount();


  const navigate = useNavigate();
  const order = useNavigate();
  
  return (

   
    <div className='custom-backgroundSize bg-black'>
    


    <div className='cartItems '>{PRODUCTS.map((product)=> {
      if(cartItems[product.id] !== 0) {
        return <CartItem data={product}/>
      }
    })}</div>

{totalAmount > 0 ?
    <div className='checkot bg-black'>
      <p className=' subtotal fs-3'>SubTotal: {totalAmount} DKK</p>
      <button onClick={() => navigate('/shop')} className=' lead btn btn-danger my-5 mx-2'>Continue Shopping</button>
      <button onClick={()=> order('/order')} className=' lead btn btn-success'>Order</button></div> 
      
      :<div className='empty-cart'> 
        <h1 className=' text-center  p-5 display-3'> Your Cart is empty</h1>
        <button onClick={() => navigate('/shop')} className='customized-btn btn my-5 mx-2'>Order!</button></div>}
     
    </div>
  )
}