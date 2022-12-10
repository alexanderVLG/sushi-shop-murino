import { Link } from 'react-router-dom';
import { products } from '../data.js';
import About from '../components/About';

const Products = () => {
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
            {products.map((product) => {
              return (
                <Link to={`/products/${product.id}`} className="link__product">
                  <li className='card__item' key={product.id}>
                    <h5 className='card__title'>{product.name}</h5>
                    <img className="card__img" src={product.image} alt="Фото сета из суши и роллов." />
                    <p className='card__desc'>{product.weight} грамм, {product.pieces} кусочков</p>
                    <p className='card__price'>{product.cost} РУБ</p>
                    <button className='card__btn' type='button'>Хочу!</button>
                  </li>
                </Link>
              );
            })}
          </ul>
        </section>
        <About />
      </main>
    );
  }

export default Products;
