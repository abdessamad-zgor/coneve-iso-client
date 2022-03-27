import { createSlice } from '@reduxjs/toolkit';
import { getPersistedData } from '../common/actions';
import _ from 'lodash';

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      let productToAdd = state.products.filter((product) => product.title == action.payload.product.title);
      if (productToAdd.length == 0) {
        state.products.push({
          ...action.payload.options,
          quantity: action.payload.quantity,
          title: action.payload.product.title,
          image: action.payload.product.images[0],
          price: action.payload.product.price,
        });
      } else {
        state.products[state.products.indexOf(productToAdd[0])].quantity += action.payload.quantity;
      }
    },
    addQuantity: (state, action) => {
      let productToAdd = state.products.filter((product) => product.title == action.payload.title);
      if (productToAdd.length > 0) {
        state.products[state.products.indexOf(productToAdd[0])].quantity++;
      }
    },
    reduceQuantity: (state, action) => {
      let productToAdd = state.products.filter((product) => product.title == action.payload.title);
      if (productToAdd.length > 0) {
        state.products[state.products.indexOf(productToAdd[0])].quantity--;
      } else if (state.products[state.products.indexOf(productToAdd[0])].quantity == 0) {
        state.products.splice(state.products.indexOf(productToAdd[0]), 1);
      }
    },
    removeFromCart: (state, action) => {
      let productToDelete = state.products.filter((product) => product.title == action.payload.title);
      if (productToAdd.length > 0) {
        state.products.splice(state.products.indexOf(productToDelete[0]), 1);
      }
    },

    dumpCart: () => {
      state.products = [];
    },

    default: (state) => {},
  },
  extraReducers(builder) {
    builder.addCase(getPersistedData, (state, action) => {
      let data = JSON.parse(localStorage.getItem('state'));
      if (data == null) {
        state.products = [];
      } else {
        console.log(data == null);
        state.products = data.cart.products;
      }
    });
  },
});

export const { addToCart, addQuantity, reduceQuantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
