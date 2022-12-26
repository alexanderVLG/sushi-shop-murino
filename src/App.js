import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import HomeLayout from './pages/HomeLayout';
import Error from './pages/Error';
import ProductCard from './pages/ProductCard';
import ProductLayout from './pages/ProductLayout';
import Cart from './pages/Cart';


export default function App () {
  return (
    
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductLayout />}>
            <Route index element={<ProductList />} />
            <Route path=":productId" element={<ProductCard />} />
          </Route>
          <Route path='cart' element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Route>          
      </Routes>
    
  )
}
