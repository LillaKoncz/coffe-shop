import React from 'react'
import {Link, useLocation} from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa';
import './navbar.css';
import {Home} from '../pages/home/home'



export const Navbar = () => {

  const location = useLocation();

  return (
    <div className='nav bg-black'>
    <nav className='navbar'>
     
     {location.pathname !== '/' && ( 
        <div className=' nav-items'>
            <Link className='nav-links' to='/'>HOME</Link>
            <Link className='nav-links' to='/shop'>SHOP</Link>
            <Link className='nav-links'to='/cart'><FaShoppingCart/></Link>
            <Link className='nav-links'to='/order'></Link>
        </div> )}
    </nav>
    </div>

  )
}