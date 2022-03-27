import ShippingAddress from '../components/shippingaddress';
import OrderSummary from '../components/ordersummary';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetStatus } from '../store/slices/productSlice';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import useLogic from './logic/checkout.logic';

function Checkout(props) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { getTotal, aboveMin } = useLogic(props);
  useEffect(() => {
    return () => {
      dispatch(resetStatus());
    };
  });
  return (
    <div className="checkout">
      <div className="checkout-container">
        {aboveMin ? (
          <>
            <div className="checkout-address">
              <ShippingAddress
                cartItems={props.cartItems}
                user={props.user}
                orderStatus={props.status}
                total={getTotal()}
                orderError={props.error}
              />
            </div>
            <div className="checkout-summary">
              <OrderSummary products={props.cartItems} total={getTotal()} />
            </div>
          </>
        ) : (
          <div className="checkout-belowmin">
            <p>Your Purchase in below min purshashe value</p>
            <button onClick={() => navigate('/')}>get back</button>
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.products,
    user: state.user.info.value,
    status: state.user.orders.status,
    error: state.user.orders.error,
    coupons: state.user.coupons.value,
  };
};

export default connect(mapStateToProps)(Checkout);
