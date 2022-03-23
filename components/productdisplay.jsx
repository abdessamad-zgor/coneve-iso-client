import { CartAddIcon, Hearticon } from '../icons';
import useLogic from './logic/productdisplay.logic';

function ProductDisplay({ product }) {
  const { addToCart, setOptionValue, handleQuantityChange, quantity } = useLogic();
  return (
    <div className="product-display">
      <h1 className="product-display-title-mobile">{product.title.toUpperCase()}</h1>
      <div className="product-display-imgs">
        <div className="product-slider-imgs">
          {product.images.map((img, i) => (
            <img className="product-slide" key={i} src={img} alt="" />
          ))}
        </div>
        <img src={product.images[0]} alt="" className="product-main-image" />
      </div>
      <div className="product-display-info">
        <h1 className="product-title">{product.title.toUpperCase()}</h1>
        {product.details ? (
          <div className="product-display-details">
            {Object.keys(product.details).map((key, i) => {
              if (Array.isArray(product.details[key])) {
                return (
                  <>
                    <div key={i} className="product-display-detail-cp">
                      <h4 className="product-display-details-key">{key}:</h4>
                      <div className="product-options">
                        {product.details[key].map((value, i) => (
                          <div
                            className="product-option-value"
                            key={i}
                            option={key}
                            value={value}
                            onClick={setOptionValue}
                          >
                            {value}
                          </div>
                        ))}
                      </div>
                    </div>
                    <h4 className="product-price">{product.price} MAD</h4>
                  </>
                );
              } else {
                return (
                  <>
                    <div key={i} className="product-display-detail">
                      <h5 className="product-display-details-key">{key}:</h5>
                      <p>{product.details[key]}</p>
                    </div>
                    <h4 className="product-price">{product.price} MAD</h4>
                  </>
                );
              }
            })}
          </div>
        ) : (
          <div className="product-display-details">
            <h4 className="product-price">{product.price} MAD</h4>
          </div>
        )}

        <div className="product-display-actions">
          <div className="actions-card">
            <div className="quantity">
              <button sign="-" onClick={handleQuantityChange} className="decreace-quantity">
                -
              </button>
              <span className="quantity-value">{quantity}</span>

              <button sign="+" onClick={handleQuantityChange} className="add-quantity">
                +
              </button>
            </div>
            <span onClick={addToCart} className="fab-small">
              <CartAddIcon />
            </span>

            <span onClick={addToCart} className="fab-small">
              <Hearticon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
