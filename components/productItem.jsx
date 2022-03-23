import React from 'react';

function ProductItem({ product }) {
  return (
    <div className="productitem">
      <img src={product.image} alt="" className="product-item-img" />
      <div className="product-item-product-info">
        <h4>{product.title}</h4>
      </div>
    </div>
  );
}

export default ProductItem;
