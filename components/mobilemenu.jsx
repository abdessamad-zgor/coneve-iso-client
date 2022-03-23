import { Searchicon, Carticon, Usericon, LanguagesIcon, CollectionsIcon, Crossicon } from '../icons';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Searchbar from './searchbar';
import CartItem from './cartitem';
import { useTranslation } from 'react-i18next';

function MobileMenu(props) {
  const [drawerToOpen, setDrawerToOpen] = useState('');
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const RedirectToCheckout = () => {
    if (props.loggedIn) {
      navigate('/checkout');
    } else {
      navigate('/auth', { state: { forced: true, for: 'checkout' } });
    }
  };

  const redirectToTab = (e) => {
    navigate('/account', { state: { tab: e.target.getAttribute('name') } });
  };

  const openDrawer = (e) => {
    const drawerName = e.target.getAttribute('name');
    setDrawerToOpen(drawerName);
  };

  const closeDrawer = (e) => {
    setDrawerToOpen('');
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="mobile-root">
      <div className="mobile-menu-content">
        <div className="mobile-menu-content">
          <div className="mobile-menu-item" name="search" onClick={openDrawer}>
            <div className="icon">
              <Searchicon />
            </div>
            search
          </div>
          <div className="mobile-menu-item" name="collections" onClick={openDrawer}>
            <div className="icon">
              <CollectionsIcon />
            </div>
            collections
          </div>
          <div className="mobile-menu-item" name="cart" onClick={openDrawer}>
            <div className="icon">
              <Carticon />
            </div>
            cart
          </div>
          <div className="mobile-menu-item" name="language" onClick={openDrawer}>
            <div className="icon">
              <LanguagesIcon />
            </div>
            language
          </div>
          <div className="mobile-menu-item" name="user" onClick={openDrawer}>
            <div className="icon">
              <Usericon />
            </div>
            user
          </div>
        </div>
      </div>
      {drawerToOpen && (
        <div className="mobile-menu-dropdown">
          <div className="mobile-menu-header" onClick={closeDrawer}>
            {' '}
            <div className="icon">
              <Crossicon />
            </div>
          </div>
          <div className="mobile-menu-container">
            {setContent(drawerToOpen, props, {
              redirect: RedirectToCheckout,
              changeLanguage: changeLanguage,
              redirectToTab: redirectToTab,
              t: t,
            })}
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.products,
    user: state.user.info.value,
    loggedIn: state.user.info.loggedIn,
  };
};

function setContent(drawerToOpen, props, fn) {
  switch (drawerToOpen) {
    case 'search':
      return (
        <div className="flex-column pa-2">
          <Searchbar />
          <div className=""></div>
        </div>
      );
    case 'cart':
      return (
        <>
          <div className="flex-column container">
            {props.cartItems.map((product, i) => (
              <CartItem key={i} product={product} />
            ))}
          </div>
          <div className="drawer-footer">
            <button onClick={fn.redirect} className="drawer-checkout-btn">
              Checkout
            </button>
          </div>
        </>
      );
    case 'language':
      return (
        <>
          <h3 className="title">choose language</h3>
          <div className="flex-column">
            <span className="item" onClick={() => fn.changeLanguage('fr')}>
              Francais
            </span>
            <span className="item" onClick={() => fn.changeLanguage('en')}>
              English
            </span>
          </div>
        </>
      );
    case 'user':
      return (
        <div className="mobile-menu-user">
          <div className="dropdown-header">
            <p>hello, {props.user.userName}</p>
            <p className="thin small grey">{props.user.email}</p>
          </div>
          <div className="dropdown-content">
            <div className="dropdown-item" onClick={fn.redirectToTab} name="overview">
              {fn.t('overview')}
            </div>
            <div className="dropdown-item" onClick={fn.redirectToTab} name="orders">
              {fn.t('my orders')}
            </div>
            <div className="dropdown-item" onClick={fn.redirectToTab} name="wishlist">
              {fn.t('my wishlist')}
            </div>
            <div className="dropdown-item" onClick={fn.redirectToTab} name="gifts">
              {fn.t('my gifts')}
            </div>

            {props.loggedIn ? <div className="dropdown-item">signout</div> : ''}
          </div>
        </div>
      );
  }
}

export default connect(mapStateToProps)(MobileMenu);
