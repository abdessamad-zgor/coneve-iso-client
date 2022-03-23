import CartItem from './cartitem';
import { connect } from 'react-redux';
import useLogic from './logic/drawer.logic';
import $ from 'jquery';

//problem: making the slide out animation

function Drawer(props) {
  const { RedirectToCheckout } = useLogic(props);
  return (
    <div
      id="drawer"
      className="drawer-active"
      onClick={() => {
        $('#drawer').animate({ right: '-40%' }, 300);
      }}
    >
      {
        <div className="container-full">
          {props.cartItems.length > 0 ? (
            <div className="container-full relative">
              {props.cartItems.map((product, i) => (
                <CartItem key={i} product={product} />
              ))}
              <div className="drawer-footer">
                <button onClick={RedirectToCheckout} className="drawer-checkout-btn">
                  Checkout
                </button>
              </div>
            </div>
          ) : (
            <h4 className="grey ">there is nothing here</h4>
          )}
        </div>
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.products,
    loggedIn: state.user.info.loggedIn,
  };
};

export default connect(mapStateToProps)(Drawer);
