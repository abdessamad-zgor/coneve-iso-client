//import logic
import useLogic from './logic/cartitem.logic';
import CapitilizeString from '../helpers/capitalize';

function CartItem({ product, order }) {
  const { increaseQuantity, decreaseQuantity } = useLogic(product);

  return (
    <div className="cartitem">
      <img src={product.image} alt="" className={order ? 'order-item-img' : 'cart-item-img'} />
      <div className="cart-item-product-info">
        <h4>{CapitilizeString(product.title)}</h4>
        <p className="grey small">{product.price} MAD</p>
      </div>
      {!order ? (
        <div className="quantity">
          <button sign="-" onClick={decreaseQuantity} className="decreace-quantity">
            -
          </button>
          <span className="quantity-value">{product.quantity}</span>

          <button sign="+" onClick={increaseQuantity} className="add-quantity">
            +
          </button>
        </div>
      ) : (
        <div className="quantity-value">{product.quantity}</div>
      )}
    </div>
  );
}

export default CartItem;
