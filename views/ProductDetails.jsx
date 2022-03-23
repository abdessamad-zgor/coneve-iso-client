import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ProductDisplay from '../components/productdisplay';
import { getProductInView } from '../store/thunks/productsThunk';
import { resetStatus } from '../store/slices/productSlice';
import { useDispatch } from 'react-redux';
import Reviews from '../components/reviews';

function ProductDetails(props) {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(props.status);
    if (
      (props.status == 'idle' || props.status == 'completed' || props.status == 'loading') &&
      (Object.keys(props.productInView).length == 0 || (props.productInView.id && props.productInView.id !== params.id))
    ) {
      dispatch(getProductInView(params.id));
    }
    return () => {
      dispatch(resetStatus());
    };
  }, []);
  return (
    <div className="products-root">
      {(props.status == 'idle' || props.status == 'completed' || props.status == 'loading') &&
      Object.keys(props.productInView).length > 0 &&
      props.productInView.id &&
      props.productInView.id == params.id ? (
        <>
          <ProductDisplay product={props.productInView} />
          <Reviews productId={props.productInView.id} />
        </>
      ) : (
        ''
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    status: state.products.inView.status,
    productInView: state.products.inView.value,
    error: state.products.inView.error,
  };
};

export default connect(mapStateToProps)(ProductDetails);
