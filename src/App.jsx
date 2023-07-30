import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Home } from './assets/pages/home/home';
import { Cart } from './assets/pages/cart/cart';
import { Shop } from './assets/pages/shop/shop';
import {Order} from './assets/pages/cart/order'
import { Navbar } from './assets/components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ShopContextProvider } from './assets/context/shop-context';


function App() {
  return (
    <ShopContextProvider>
    <Router>
      <div>
      <Navbar className='m-5' />
      <Routes>
        <Route path='/coffe-shop/'element={<Home />} />
        <Route path='/coffe-shop/shop' element={<Shop />} />
        <Route path='/coffe-shop/cart' element={<Cart />} />
        <Route path='/coffe-shop/order' element={<Order/>} />
      </Routes>
      </div>
    </Router>
    </ShopContextProvider>
  );
}

export default App;
