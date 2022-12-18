import bigPhiladephia from '../media/productsImg/small/bigPhiladephia.png';
import { PlusButtonContainer, PlusButtonArrows } from '../controls/PlusButton';
import { MinusButtonContainer, MinusButton } from '../controls/MinusButton';
import { CartButton } from '../controls/CartButton';

const Cart = () => {
  return (
    <section className="cart__container">
      <h2>Корзина</h2>
      <article className='cart__items'>
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
      </article>
      <section className='cart-total'>
        <h4>Итого</h4>

      </section>
      <CartButton>
        Оформить заказ
      </CartButton>
    </section>
  );
}

export default Cart;