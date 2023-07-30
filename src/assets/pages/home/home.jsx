import React from 'react'
import './Home.css' 
import { useNavigate } from 'react-router-dom'
import background from '../../images/background-espresso.jpg'


export const Home = () => {
  

  const navigate = useNavigate();
  return (
   
    <div className=' container  background-home'>
    <div className='get-started'>
      <h4 className='display-4 mb-4 text-light'>Melcsi Coffee</h4>
      <p className='text-light'>Spring the queue and order from our App!</p>
      <button onClick ={()=>navigate('/shop')}className='btn btn-dark  custom-btn'>Get Started</button>
    </div>
</div>
   
  )
}