import { Link } from 'react-router-dom';
import first from '../media/productsImg/ProductCard/first.jpg';
import About from '../components/About';

const ProductCard = () => {
  return(
    <>
      <section>
        <img src={first} alt="Аппетитные роллы в большом количестве."/>
        <Link to="/products">Back to Products</Link>
      </section>
      <About />
    </>
    
  );
}
export default ProductCard;
