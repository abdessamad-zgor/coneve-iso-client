import { useNavigate } from 'react-router-dom';
import CapitilizeString from '../helpers/capitalize';

function ProductCard({ product, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="product-card"
      onClick={() => {
        navigate(`/products/${id}`);
      }}
    >
      <div className="product-card-img">
        <img src={product.mainImage} alt="" />
      </div>
      <div
        className="product-card-info"
        onClick={() => {
          navigate(`/products/${id}`);
        }}
      >
        <p>{CapitilizeString(product.title)}</p>
      </div>
    </div>
  );
}

export default ProductCard;
