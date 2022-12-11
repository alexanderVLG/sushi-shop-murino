import { Component } from "react";
import { Link } from 'react-router-dom';
import About from "../components/About";
import pizza from '../media/img/pizza.jpg';
import sets from '../media/img/sets.jpg';
import wok from '../media/img/wok.jpg';
import rolls from '../media/img/rolls.jpg';
import sushi from '../media/img/sushi.jpg';
import soup from '../media/img/soup.jpg';
import salad from '../media/img/salad.jpg';
import beverages from '../media/img/beverages.jpg';
import combo from '../media/img/combo.jpg';
import eel from '../media/img/eel.jpg';
import corndog from '../media/img/corndog.jpg';
import chiken from '../media/img/chiken.jpg';
import promo from '../media/img/promo.jpg';

class Home extends Component {
  render () {
    return (
      <>
          <section className="menu__list">
          <div className="menu__item">
              <img src={pizza} alt="Фото пиццы с томатной пастой, базиликом и сыром."/>
            <div>Пицца</div>
          </div>
          <div className="menu__item">
            <Link to="/products">
              <img src={sets} alt="Фото роллов и суши."/>
            </Link>
            <div>Сеты</div>
          </div>
          <div className="menu__item">
            <a href="#">
              <img src={wok} alt="Фото роллов и суши."/>
            </a>
            <div>Wok</div>
          </div>
          <div className="menu__item">
            <a href="#">
              <img src={rolls} alt="Фото роллов и суши."/>
            </a>
            <div>Роллы</div>
          </div>
          <div className="menu__item">
            <a href="#">
              <img src={sushi} alt="Фото роллов и суши."/>
            </a>
            <div>Суши</div>
          </div>
          <div className="menu__item menu__item--soon">
            <a href="#">
              <img src={soup} alt="Фото роллов и суши."/>
            </a>
            <div>Супы</div>
          </div>
          <div className="menu__item menu__item--soon">
            <a href="#">
              <img src={salad} alt="Фото роллов и суши."/>
            </a>
            <div>Салаты</div>
          </div>
          <div className="menu__item">
            <a href="#">
              <img src={beverages} alt="Фото роллов и суши."/>
            </a>
            <div>Напитки</div>
          </div>
          <div className="menu__item menu__item--wider">
            <a href="#">
              <img src={combo} alt="Фото роллов и суши."/>
            </a>
            <div className="menu__title--bottom">Комбо</div>
          </div>
          <div className="menu__item">
            <a href="#">
              <img src={eel} alt="Фото роллов и суши."/>
            </a>
            <div className="menu__title--bottom">Угорь</div>
          </div>
          <div className="menu__item">
            <a href="#">
              <img src={corndog} alt="Фото роллов и суши."/>
            </a>
            <div className="menu__title--bottom">Корн дог</div>
          </div>
          <div className="menu__item menu__item--wider">
            <a href="#">
              <img src={chiken} alt="Фото роллов и суши."/>
            </a>
            <div className="menu__title--bottom">Чикен</div>
          </div>
          <div className="menu__item menu__item--wider">
            <a href="#">
              <img src={promo} alt="Фото роллов и суши."/>
            </a>
            <div className="menu__title--bottom">Акции</div>
          </div>
          </section>
          <About />
      </>
    )
  }
}


export default Home;