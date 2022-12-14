import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import  {data}  from '../data';
import About from '../components/About';
import MainFooter from '../components/MainFooter';
import Carousel from '../components/Carousel';
import { PlusButtonContainer, PlusButtonArrows } from '../controls/PlusButton';

export default function ProductCard () {
  const {productId} = useParams();
  const product = data.find((product) => product.id === productId );
  const {cardImage, name, weight, pieces, cost } = product;
  useEffect(() => console.log(product), [product])
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
        <article className='recommend-sets'>
            <h5 className='recommend-sets__title'>Рекомендуем к этому товару</h5>
            <Carousel>
              {
                product.recommends.map((recommend) => {
                  return (
                    <div className='item' key={recommend.id}>
                      <h5>{recommend.name}</h5>
                      <img src={recommend.smallImage} alt={recommend.name} />
                      <p>{recommend.price} руб
                        <PlusButtonContainer>
                          <PlusButtonArrows />
                        </PlusButtonContainer>
                      </p>
                    </div>
                  );
                })
              }
            </Carousel>
          </article>
      </section>
      <About />
      <MainFooter />
    </>    
  );
}
