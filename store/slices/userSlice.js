import { createSlice } from '@reduxjs/toolkit';

import {
  loginUserThunk,
  signUpUserThunk,
  addOrderThunk,
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
    data: [],
  },
  orders: {
    error: null,
    status: 'idle',
    data: [],
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
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.info.status = 'completed';
        state.info.idToken = action.payload.idToken;
        state.info.refreshToken = action.payload.refreshToken;

        state.info.loggedIn = true;
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.info.status = 'rejected';
        state.info.error = action.error;
      })
      .addCase(signUpUserThunk.pending, (state, action) => {
        state.info.status = 'loading';
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
      })
      .addCase(addOrderThunk.fulfilled, (state, action) => {
        state.orders.status = 'completed';
        if (Object.keys(action.payload).includes('newOrder')) {
          state.orders.data.push(action.payload.newOrder);
          state.info.address = action.payload.address;
        } else {
          state.orders.data.push(action.payload);
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
      })
      .addCase(getOrdersThunk.fulfilled, (state, action) => {
        state.orders.status = 'completed';
        state.orders.data = action.payload;
      })
      .addCase(getOrdersThunk.rejected, (state, action) => {
        state.orders.status = 'failed';
        state.orders.error = action.error;
      })
      .addCase(getCouponsThunk.pending, (state, action) => {
        state.coupons.status = 'loading';
      })
      .addCase(getCouponsThunk.fulfilled, (state, action) => {
        state.coupons.status = 'completed';
        state.coupons.value = action.payload;
      })
      .addCase(getCouponsThunk.rejected, (state, action) => {
        state.coupons.status = 'failed';
        state.coupons.error = action.error;
      });

    // .addCase(getPersistedData, (state, action) => {
    //   let data = JSON.parse(localStorage.getItem('state'));
    //   if (data == (null || {})) {
    //     return state;
    //   }
    //   state.info = data.user.info;
    //   state.orders = data.user.orders;
    //   state.wishlist = data.user.wishlist;
    // });
  },
});

export default userSlice.reducer;
