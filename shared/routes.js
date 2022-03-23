// import Layout from '../app/views/Layout';
// import Home from '../app/views/Home';
// import Checkout from '../app/views/Checkout';
// import Auth from '../app/views/Auth';
// import ProductDetails from '../app/views/ProductDetails';
// import Collectionpage from '../app/views/Collectionpage';
// import AccountSettings from '../app/views/AccountSettings';
// import NotFound from '../app/views/NotFound';
// import { getProductInView, populateIndex } from '../app/store/thunks/productsThunk';

const Layout = require('../views/Layout').default;
const Home = require('../views/Home').default;
const Checkout = require('../views/Checkout').default;
const Auth = require('../views/Auth').default;
const ProductDetails = require('../views/ProductDetails').default;
const Collectionpage = require('../views/Collectionpage').default;
const NotFound = require('../views/NotFound').default;
const AccountSettings = require('../views/AccountSettings').default;
const { getProductInView, populateIndex } = require('../store/thunks/productsThunk');

const routes = [
  {
    path: '/',
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Home />,
        fetchData: (store, params = {}) => store.dispatch(populateIndex()),
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'products/:id',
        element: <ProductDetails />,
        fetchData: (store, params) => store.dispatch(getProductInView(params.id)),
      },
      {
        path: 'collections/:id',
        element: <Collectionpage />,
        fetchData: (path) => getCollection(path),
      },
      {
        path: 'auth',
        element: <Auth />,
      },
      {
        path: 'account',
        element: <AccountSettings />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

export default routes;
