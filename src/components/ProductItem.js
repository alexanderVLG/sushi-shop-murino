import React from 'react';
import { data } from '../data';
import { Link } from 'react-router-dom';

export default function ProductItem () {
  const handleButtonAddCart = () => {
    console.log('clicked');
  }
  return (
    <ul className="cards__list">
      {data.map((product) => {
        return (
          <li className='card__item' key={product.id}>
            <h4 className='card__title'>
              <Link to={`/products/${product.id}`} className="link__product">{product.name}</Link>
            </h4>
            <img className="card__img" src={product.image} alt="Фото сета из суши и роллов." />
            <p className='card__desc'>{product.weight} грамм, {product.pieces} кусочков</p>
            <p className='card__price'>{product.cost} РУБ</p>
            <button onClick={handleButtonAddCart} className='card__btn' type='button'>Хочу!</button>
          </li>
        );
      })}
    </ul>
  )
}