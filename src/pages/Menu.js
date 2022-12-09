import React, { useState } from 'react';
import sushiSet from '../media/productsImg/small/sushiSet.jpg';
import { products } from '../data.js';
import About from '../components/About';

const Menu = () => {
    const [data] = useState(products);
    
    return(
      <main>
        <section className="menu__container">
          <h2>Сеты</h2>
          <div className="menu__sorting">
            <div className="sort__icon"><span></span></div>
            <div className="sort__btn">Сортировка</div>
            <div className="sort__arrow"></div>
          </div>
          <ul className="cards__list">
            {data.map((product) => {
              return (
                <li className='card__item' key={product.id}>
                  <h5 className='card__title'>{product.name}</h5>
                  <img className="card__img" src={product.image} alt="Фото сета из суши и роллов." />
                  <p className='card__desc'>{product.weight} грамм, {product.pieces} кусочков</p>
                  <p className='card__price'>{product.cost} РУБ</p>
                  <button className='card__btn' type='button'>Хочу!</button>
                </li>
              );
            })}
            <li className="card__item">
              <h5 className="card__title">Филадельфия и Лосось сет</h5>
              <img className="card__img" src={sushiSet} alt="много роллов." />
              <p className="card__desc">1050 грамм, 30 кусочков</p>
              <p className="card__price">1500 РУБ</p>
              <button className="card__btn" type="button">Хочу!</button>
            </li>
          </ul>
        </section>
        <About />
      </main>
    );
  }

export default Menu;
