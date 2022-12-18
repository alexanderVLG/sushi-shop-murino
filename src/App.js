import {Component} from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import HomeLayout from './pages/HomeLayout';
import Error from './pages/Error';
import ProductCard from './pages/ProductCard';
import ProductLayout from './pages/ProductLayout';
import Cart from './pages/Cart';




class App extends Component {
  render () {
    return (
      
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<ProductLayout />}>
              <Route index element={<Products />} />
              <Route path=":productId" element={<ProductCard />} />
            </Route>
            <Route path='cart' element={<Cart />} />
            <Route path="*" element={<Error />} />
          </Route>          
        </Routes>
      
    )
  }
}

export default App;