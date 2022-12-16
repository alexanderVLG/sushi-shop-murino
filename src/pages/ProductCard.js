import { useParams } from 'react-router-dom';
import  {products}  from '../data';
import About from '../components/About';
import Carousel from '../components/Carousel';


const ProductCard = () => {
  const {productId} = useParams();
  const product = products.find((product) => product.id === productId );
  const {cardImage, name, weight, pieces, cost } = product;

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
            <p className='product-card__desc'>{weight} грамм, {pieces} кусочков</p>
            <p className='product-card__price'>{cost} руб</p>
            <button className='product-card__btn' type='button'>Хочу!</button>
          </article>
          <article className='set-structure'>
            <h5 className='set-structure__title'>Состав сета</h5>
            <Carousel>
              {
                product.contains.map((contain) => {
                  return (
                    <div className='item' key={contain.id}>
                      <h5>{contain.name}</h5>
                      <img src={contain.smallImage} alt={contain.name} />
                      <p>{contain.price} руб</p>
                    </div>
                  );
                })
              }
            </Carousel>
          </article>
        </section>
      </section>
      <About />
    </>    
  );
}
export default ProductCard;
