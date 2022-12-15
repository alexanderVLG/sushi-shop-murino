import { useParams } from 'react-router-dom';
import  {products}  from '../data';
import About from '../components/About';
import Carousel from '../components/Carousel';
import sushiSet from '../media/productsImg/small/sushiSet.jpg';


const ProductCard = () => {
  const {productId} = useParams();
  const product = products.find((product) => product.id === productId );
  const {cardImage, name} = product;

  return(
    <>
      <section className='product-card__container'>
        <div className='link-arrow__wrapper'>
          <ul>
            <li><span></span>Назад</li>
            <li>Вперед<span></span></li>
          </ul>
        </div>
        <section className='product-card'>
          <article>
            <h4 className='product-card__title'>{name}</h4>
            <img src={cardImage} alt={name} />
            <p className='product-card__desc'>{product.weight} грамм, {product.pieces} кусочков</p>
            <p className='product-card__price'>{product.cost} руб</p>
            <button className='product-card__btn' type='button'>Хочу!</button>
          </article>
          <article className='set-structure'>
            <h5 className='set-structure__title'>Состав сета</h5>
            <Carousel>
              <div className='item'>
                <h5>Филадельфия</h5>
                <img src={sushiSet} alt="" />
                <p>350 руб</p>
              </div>
              <div className='item'>
                <h5>Филадельфия</h5>
                <img src={sushiSet} alt="" />
                <p>350 руб</p>
              </div>
              <div className='item'>
                <h5>Филадельфия</h5>
                <img src={sushiSet} alt="" />
                <p>350 руб</p>
              </div>
              <div className='item'>
                <h5>Филадельфия</h5>
                <img src={sushiSet} alt="" />
                <p>350 руб</p>
              </div>
            </Carousel>
          </article>
        </section>
      </section>
      <About />
    </>    
  );
}
export default ProductCard;
