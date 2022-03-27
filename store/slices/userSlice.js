import { createSlice } from '@reduxjs/toolkit';

import {
  loginUserThunk,
  signUpUserThunk,
  addOrderThunk,
  getAddressThunk,
  changeAddressThunk,
  getOrdersThunk,
  getCouponsThunk,
} from '../thunks/userThunks';
import { getPersistedData, signOutUser } from '../common/actions';

const initialState = {
  info: {
    status: 'idle',
    error: null,
    value: {},
    idToken: '',
    refreshToken: '',
    loggedIn: false,
  },
  address: {
    status: 'idle',
    error: null,
    value: {},
  },

  wishlist: {
    error: null,
    status: 'idle',
    value: [],
  },
  orders: {
    error: null,
    status: 'idle',
    value: [],
  },
  coupons: {
    status: 'idle',
    error: null,
    value: [],
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    default: (state) => {
      return state;
    },

    resetStatus: (state) => {
      state.info.status = 'idle';
      state.orders.status = 'idle';
      state.wishlist.status = 'idle';
      state.coupons.status = 'idle';
      state.address.status = 'idle';
      state.address.error = null;
      state.coupons.error = null;
      state.wishlist.error = null;
      state.orders.error = null;
      state.info.error = null;
    },
  },
  /**
   *
   * ### Auth thunks: loginUserThunk, SignupUserThunk, SignoutUserThunk
   * these change the field state.info
   *
   *
   * ### UserData Thunks: ChangeAddressThunk, AddOrderThunk, getOrdersThunk, getWishlistThunk, addToWishlistThunk
   * these change the fields state.orders, state.info, state.wishlist
   *
   */

  extraReducers(builder) {
    builder
      .addCase(loginUserThunk.pending, (state, action) => {
        state.info.status = 'loading';
        state.info.error = null;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.info.status = 'completed';
        state.info.idToken = action.payload.idToken;
        state.info.value.uid = action.payload.localId;
        state.info.refreshToken = action.payload.refreshToken;
        state.info.value.fullName = action.payload.fullName;
        state.info.value.phone = action.payload.phone;
        state.info.value.email = action.payload.email;
        state.info.loggedIn = true;
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.info.status = 'rejected';
        state.info.error = action.error;
      })
      .addCase(signUpUserThunk.pending, (state, action) => {
        state.info.status = 'loading';
        state.info.error = null;
      })
      .addCase(signUpUserThunk.fulfilled, (state, action) => {
        state.info.status = 'completed';
        state.info.value.fullName = action.payload.fullName;
        state.info.value.phone = action.payload.phone;
        state.info.value.email = action.payload.email;

        state.info.loggedIn = true;
      })
      .addCase(signUpUserThunk.rejected, (state, action) => {
        state.info.status = 'failed';
        state.info.error = action.error;
      })
      .addCase(addOrderThunk.pending, (state, action) => {
        state.orders.status = 'loading';
        state.orders.error = null;
      })
      .addCase(addOrderThunk.fulfilled, (state, action) => {
        state.orders.status = 'completed';
        if (Object.keys(action.payload).includes('newOrder')) {
          state.orders.value.push(action.payload.newOrder);
          state.address.value = action.payload.address;
        } else {
          state.orders.value.push(action.payload);
        }
      })
      .addCase(addOrderThunk.rejected, (state, action) => {
        state.orders.status = 'failed';
        state.orders.error = action.error;
      })
      .addCase(signOutUser, (state, action) => {
        state.address.value = {};
        state.coupons.value = [];
        state.info.status = 'idle';
        state.info.value = {};
        state.info.idToken = '';
        state.info.loggedIn = false;
        state.info.refreshToken = '';

        state.orders.value = [];
        state.wishlist.value = [];
      })
      .addCase(getOrdersThunk.pending, (state, action) => {
        state.orders.status = 'loading';
        state.orders.error = null;
      })
      .addCase(getOrdersThunk.fulfilled, (state, action) => {
        state.orders.status = 'completed';
        state.orders.value = action.payload;
      })
      .addCase(getOrdersThunk.rejected, (state, action) => {
        state.orders.status = 'failed';
        state.orders.error = action.error;
      })
      .addCase(getCouponsThunk.pending, (state, action) => {
        state.coupons.status = 'loading';
        state.coupons.error = null;
      })
      .addCase(getCouponsThunk.fulfilled, (state, action) => {
        state.coupons.status = 'completed';
        state.coupons.value = action.payload;
      })
      .addCase(getCouponsThunk.rejected, (state, action) => {
        state.coupons.status = 'failed';
        state.coupons.error = action.error;
      })
      .addCase(getAddressThunk.pending, (state, action) => {
        state.address.status = 'loading';
        state.address.error = null;
      })
      .addCase(getAddressThunk.fulfilled, (state, action) => {
        state.address.status = 'completed';
        state.address.value = action.payload;
      })
      .addCase(getAddressThunk.rejected, (state, action) => {
        state.address.error = action.error;
        state.address.status = 'failed';
      })

      .addCase(getPersistedData, (state, action) => {
        let data = JSON.parse(localStorage.getItem('state'));
        if (data == null) {
          return state;
        } else {
          state.info = data.user.info;
          state.address = data.user.address;
          state.orders = data.user.orders;
          state.wishlist = data.user.wishlist;
        }
      });
  },
});

export default userSlice.reducer;
