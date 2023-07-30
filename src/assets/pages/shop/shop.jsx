import React from 'react'
import './Shop.css'
import { PRODUCTS } from '../../../products'
import { Product } from './product'

export const Shop = () => {
  return (
<div className='bg-black'>
  <div className='menu'>
    <h4 className='menu-title display-1 '> MENU </h4>
  </div>

  <div className='products'>{PRODUCTS.map((product) => 
  <Product data={product}/>)}

  </div>

</div>
  )
}
