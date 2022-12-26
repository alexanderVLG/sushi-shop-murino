import React from 'react';
import ProductItem from '../components/ProductItem';
import About from '../components/About';
import MainFooter from '../components/MainFooter.js';


export default function ProductList () {
  
    return(
      <>
        <section className="products__container">
          <h2>Сеты</h2>
          <div className="products__sorting">
            <div className="sort__icon"><span></span></div>
            <div className="sort__btn">Сортировка</div>
            <div className="sort__arrow"></div>
          </div>
          <ProductItem />
        </section>
        <About />
        <MainFooter />
      </>
    );
  }

