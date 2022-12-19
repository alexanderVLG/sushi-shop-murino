import { Link } from 'react-router-dom';
import { products } from '../data.js';
import About from '../components/About';
import MainFooter from '../components/MainFooter.js';

const Products = () => {
    return(
      <>
        <section className="products__container">
          <h2>Сеты</h2>
          <div className="products__sorting">
            <div className="sort__icon"><span></span></div>
            <div className="sort__btn">Сортировка</div>
            <div className="sort__arrow"></div>
          </div>
          <ul className="cards__list">
            {products.map((product) => {
              return (
                <li className='card__item' key={product.id}>
                  <h4 className='card__title'>
                    <Link to={`/products/${product.id}`} className="link__product">{product.name}</Link>
                  </h4>
                  <img className="card__img" src={product.image} alt="Фото сета из суши и роллов." />
                  <p className='card__desc'>{product.weight} грамм, {product.pieces} кусочков</p>
                  <p className='card__price'>{product.cost} РУБ</p>
                  <button className='card__btn' type='button'>Хочу!</button>
                </li>
              );
            })}
          </ul>
        </section>
        <About />
        <MainFooter />
      </>
    );
  }

export default Products;
