import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import initStore from './store';
import Layout from './views/Layout';
import Home from './views/Home';
import Checkout from './views/Checkout';
import Auth from './views/Auth';
import ProductDetails from './views/ProductDetails';
import Collectionpage from './views/Collectionpage';
import AccountSettings from './views/AccountSettings';
import Overview from './components/overview';
import Orders from './components/orders';
import Wishlist from './components/wishlist';
import NotFound from './views/NotFound';
function App() {
  const getInitState = () => {
    let data;
    if (window.__PRELOADED_DATA__) {
      data = JSON.parse(window.__PRELOADED_DATA__);

      delete window.__PRELOADED_DATA__;
      return data;
    } else {
      return {};
    }
  };

  let store = initStore(getInitState());

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products/:id" element={<ProductDetails />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="collections" element={<Collectionpage />} />
            <Route path="auth" element={<Auth />} />
            <Route path="account/" element={<AccountSettings />}>
              <Route path="overview" element={<Overview />} />
              <Route path="orders" element={<Orders />} />
              <Route path="wishlist" element={<Wishlist />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
