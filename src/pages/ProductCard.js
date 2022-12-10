import { Link, useParams } from 'react-router-dom';
import  {products}  from '../data';
import About from '../components/About';

const ProductCard = () => {
  const {productId} = useParams();
  const product = products.find((product) => product.id === productId );
  const {image, name} = product;
  return(

      <main>
        <img src={image} alt={name} />
        <h5>{name}</h5>
        <Link to="/products">Back to Products</Link>
      <About />
      </main>    
  );
}
export default ProductCard;
