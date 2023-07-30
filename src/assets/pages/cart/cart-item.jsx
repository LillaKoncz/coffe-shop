import React, {useContext} from 'react'
import { ShopContext } from '../../context/shop-context';
import './cart.css'




export const CartItem = (props) => {
    const { id, name, price, image} = props.data;
    const{ cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext)
    
  return (
    <div className=' background-item bg-black'>
    <div className='cartItem mb-3'>
      <img className=' my-3 cart-image'src={image}/>
      <div className='description '>
        <p className='product-name fs-3 m-5'>{name}</p>
        <p className='product-name fs-4 '>{price} DKK</p>

        <div className='counthandler m-4'>
        <button className='btn-custom btn btn-light' onClick={() =>removeFromCart(id)}>-</button>
        <input className='text-center input' value={cartItems[id]} onChange={(e) =>updateCartItemCount(Number(e.target.value), id)}/>
        <button  className='btn-custom btn btn-light'onClick={() =>addToCart(id)}>+</button>
        </div>
        </div>
      </div>

    </div>
   
  )
}