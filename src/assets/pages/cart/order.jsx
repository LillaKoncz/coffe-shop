import React, { useContext } from 'react'
import './order.css'
import { ShopContext } from '../../context/shop-context'



export const Order = () => {
  const {getOrderNumber} = useContext(ShopContext);

  const getNumber =getOrderNumber();

  return (
    <>  
    <div className='order-body bg-black'>
        <div className='order-number container-fluid bg-black'>
            <h1 className='order-title display-5 '>Your order number is : </h1>

                <h3 className='number fs-1 bg-success'>{getNumber}</h3>
        </div>
      <h5 className='fs-4'> Show this number and  get Your order!</h5>
     
      </div>
    </>
  )
}