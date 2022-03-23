import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';
import userReducer from './slices/userSlice';
import ThunkMiddleware from 'redux-thunk';
export default function initStore(initialState = {}) {
  let store = configureStore({
    reducer: {
      products: productReducer,
      cart: cartReducer,
      user: userReducer,
    },
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ThunkMiddleware),
  });

  return store;
}

