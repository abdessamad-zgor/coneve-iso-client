import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import initStore from './store';
import Layout from '../app/views/Layout';
import Home from '../app/views/Home';
import Checkout from '../app/views/Checkout';
import Auth from '../app/views/Auth';
import ProductDetails from '../app/views/ProductDetails';
import Collectionpage from '../app/views/Collectionpage';
import AccountSettings from './views/AccountSettings';
import NotFound from '../app/views/NotFound';
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
            <Route path="account" element={<AccountSettings />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
