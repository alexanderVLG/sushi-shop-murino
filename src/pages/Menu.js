import sushiSet from '../media/productsImg/sushiSet.png'
import products from '../data';

const Menu = () => {

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
                <li className='card__item' key={product.id}>
                  <h5 className='card__title'>{product.name}</h5>
                  <img className="card__img" src={sushiSet} alt="" />
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
      </main>
    );
  }

export default Menu;
