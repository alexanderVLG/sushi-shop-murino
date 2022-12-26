import React from 'react';
import bigPhiladephia from '../media/productsImg/small/bigPhiladephia.png';
import { PlusButtonContainer, PlusButtonArrows } from '../controls/PlusButton';
import { MinusButtonContainer, MinusButton } from '../controls/MinusButton';
import { CartButton } from '../controls/CartButton';

export default function Cart () {
  return (
    <section className="cart__container">
      <h2>Корзина</h2>
      <section className='cart__items'>
        <ul className='cart__list'>
          <li className='list__item'>
            <h4>Самая большая Филадельфия</h4>
            <img src={bigPhiladephia} alt="" />
            <p>
              <MinusButtonContainer>
                <MinusButton />
              </MinusButtonContainer>
              1
              <PlusButtonContainer>
                <PlusButtonArrows />
              </PlusButtonContainer>
            </p>
            <p>170 руб</p>
          </li>
        </ul>
      </section>
      <section className='cart-total__list'>
        <h4>Итого</h4>
        <div className='cart-total__item'>
          <span>1 товар</span>
          <span className='cart-total__item--uppercase'>320 руб</span>
        </div>
        <div className='cart-total__item'>
          <span>Скидка</span>
          <span className='cart-total__item--uppercase'>0 руб</span>
        </div>
        <div className='cart-total__item'>
          <span>Доставка</span>
          <span>Бесплатно</span>
        </div>
      </section>
      <CartButton>
        Оформить заказ
      </CartButton>
    </section>
  );
}
