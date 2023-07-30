import React from 'react'
import {Link, useLocation} from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa';
import './navbar.css';
import {Home} from '../pages/home/home'



export const Navbar = () => {

  const location = useLocation();

  return (
    <div className=' custom nav nav bg-black'>
    <nav className='navbar'>
     
     {location.pathname !== '/coffe-shop/' && ( 
        <div className=' nav-items'>
            <Link className='nav-links' to='/coffe-shop/'>HOME</Link>
            <Link className='nav-links' to='/coffe-shop/shop'>SHOP</Link>
            <Link className='nav-links'to='/coffe-shop/cart'><FaShoppingCart/></Link>
            <Link className='nav-links'to='/coffe-shop/order'></Link>
        </div> )}
    </nav>
    </div>

  )
}