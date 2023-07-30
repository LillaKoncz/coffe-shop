import React, { useContext } from 'react'
import './Shop.css'
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
    const { id, name, price, image} = props.data;
    const { addToCart, cartItems} = useContext(ShopContext)

    const cartItemAmount = cartItems[id]

  return (
   <>
   <div className='containerWithButton'>
  <div className='containers m-4'>
     <div className='cafe-box'>
        <img className='custom-img' src={image}/>
    
        <h2 className=' product-name display-5 m-3'> {name}</h2>
        <p className=' lead price'>{price} DKK</p>
        <button className='btn btn-dark mb-4' onClick={()=> addToCart(id)}>Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
    </div>
  </div>
  </div>
   </>
  )
}