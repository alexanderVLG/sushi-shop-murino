import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import 'pure-react-carousel/dist/react-carousel.es.css';
import sushiSet from '../media/productsImg/small/sushiSet.jpg';


const GoodsCarousel = () => {

  
  return (
    <CarouselProvider
      naturalSlideWidth={50}
      naturalSlideHeight={12}
      totalSlides={3}
      visibleSlides={2}
    >
      <Slider>
        <Slide index={0}>
          <div>
            <img className="slider__image" src={sushiSet} width={40} height={40} alt="" />
            <h5>Филадельфия</h5>
            <p>390 руб</p>
          </div>
        </Slide>
        <Slide index={1}>
          <div>
            <img className="slider__image" src={sushiSet} width={40} height={40} alt="" />
            <h5>Филадельфия</h5>
            <p>390 руб</p>
          </div>
        </Slide>
        <Slide index={2}>
          <div>
            <img className="slider__image" src={sushiSet} width={40} height={40} alt="" />
            <h5>Филадельфия</h5>
            <p>390 руб</p>
          </div>
        </Slide>
      </Slider>
      <ButtonBack>Назад</ButtonBack>
      <ButtonNext>Вперед</ButtonNext>
      {/* <div>
          <img className="slider__image" src={sushiSet} width={40} height={40} alt="" />
          <h5>Филадельфия</h5>
          <p>390 руб</p>
        </div>
        <div>
          <img className="slider__image" src={sushiSet} width={40} height={40} alt="" />
          <h5>Филадельфия</h5>
          <p>390 руб</p>
        </div>
        <div>
          <img className="slider__image" src={sushiSet} width={40} height={40} alt="" />
          <h5>Филадельфия</h5>
          <p>390 руб</p>
        </div>
        <div>
          <img className="slider__image" src={sushiSet} width={40} height={40} alt="" />
          <h5>Филадельфия</h5>
          <p>390 руб</p>
        </div> */}
    </CarouselProvider>
  );
}
export default GoodsCarousel;