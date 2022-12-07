import { Component } from "react";
import sushiSet from '../media/productsImg/sushiSet.png'

class Menu extends Component {
  render() {
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
            <li className="card__item">
              <h5 className="card__title">Филадельфия и Лосось сет</h5>
              <img className="card__img" src={sushiSet} alt="много роллов." />
              <p className="card__desc">1050 грамм, 30 кусочков</p>
              <p className="card__price">1500 РУБ</p>
              <button className="card__btn" type="button">Хочу!</button>
            </li>
          </ul>
        </section>
      </main>
    );
  }
}
export default Menu;
