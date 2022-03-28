import { createAsyncThunk } from '@reduxjs/toolkit';
import fetch from '../../helpers/fetch';

//login user with Firebase Auth REST API and get user info from local api
const loginUserThunk = createAsyncThunk('user/loginUser', async (data) => {
  try {
    let resAuth = await fetch({
      url: `https://localhost:3000/proxy/login`,
      method: 'POST',
      body: {
        email: data.identifier,
        password: data.password,
        returnSecureToken: true,
      },
    });
    let resUser = await fetch({
      url: `http://localhost:5000/api/authenticated/users/${resAuth.localId}`,
      method: 'GET',
      headers: {
        Authorization: `BASIC ${resAuth.idToken} ${resAuth.refreshToken}`,
      },
    });

    return resUser;
  } catch (e) {
    throw e;
  }
});

//sign up user
const signUpUserThunk = createAsyncThunk('user/signUpUser', async (data) => {
  try {
    let resAuth = await fetch({
      url: `https://localhost:3000/proxy/signup`,
      method: 'POST',
      body: { email: data.email, password: data.password, returnSecureToken: true },
    });
    let resUser = await fetch({
      url: `http://localhost:5000/api/authenticated/users/${resAuth.localId}`,
      method: 'POST',
      body: { ...data },
      headers: {
        Authorization: `BASIC ${resAuth.idToken} ${resAuth.refreshToken}`,
      },
    });

    return resUser;
  } catch (e) {
    throw e;
  }
});

const addOrderThunk = createAsyncThunk('user/addOrder', async (data) => {
  // try {
  //   const docRef = await db.collection('users').doc(data.user.uid).collection('orders').add(data);
  //   const order = await docRef.get();
  //   if (data.address.setDefaultAddress) {
  //     const { setDefaultAddress, ...pureAddress } = data.address;
  //     return { newOrder: order.data(), address: pureAddress };
  //   } else {
  //     return { ...order.data() };
  //   }
  // } catch (e) {
  //   console.error(e);
  // }
  try {
    let response = await fetch({
      url: `http://localhost:5000/api/authenticated/users/${data.uid}/orders`,
      method: 'POST',
      body: {
        products: data.products,
        user: data.user.value,
        address: data.address,
        estimatedTotal: data.estimatedTotal,
        orderedAt: data.orderedAt,
      },
      headers: { Authorization: `BASIC ${data.idToken} ${data.refreshToken}` },
    });
    if (data.address.setDefaultAddress) {
      const { setDefaultAddress, ...pureAddress } = data.address;
      return { order: data, newAddress: pureAddress, idToken: response.idToken, refreshToken: response.refreshToken };
    } else {
      return { order: data, ...response };
    }
  } catch (e) {
    throw e;
  }
});

const changeAddressThunk = createAsyncThunk('user/changeAddress', async (data, uid) => {
  // try {
  //   const addressRef = db.collection('users').doc(uid).collection('privateInfo').doc('address');
  //   await addressRef.set(data, { merge: true });
  //   const newAddress = await addressRef.get();
  //   return newAddress.data();
  // } catch (e) {
  //   console.error(e);
  // }
});

const signOutThunk = createAsyncThunk('user/signOut', async () => {
  // try {
  //   await auth.signOut();
  // } catch (error) {
  //   console.error(error);
  // }
});

const getAddressThunk = createAsyncThunk('user/getAddress', async (data) => {
  try {
    let response = await fetch({
      url: `http://localhost:5000/api/authenticated/users/${data.uid}/address`,
      method: 'GET',
      headers: { Authorization: `BASIC ${data.idToken} ${data.refreshToken}` },
    });
    return response;
  } catch (e) {
    throw e;
  }
});

const getOrdersThunk = createAsyncThunk('user/getOrder', async (data) => {
  // try {
  //   const snapshot = await db.collection('users').doc(uid).collection('orders').get();
  //   let orders = [];
  //   snapshot.docs.forEach((order) => orders.push(order.data()));
  //   return orders;
  // } catch (error) {
  //   throw error;
  // }
  try {
    let response = await fetch({
      url: `http://localhost:5000/api/authenticated/users/${data.uid}/orders`,
      method: 'GET',
      headers: { Authorization: `BASIC ${data.idToken} ${data.refreshToken}` },
    });
    return response;
  } catch (e) {
    throw e;
  }
});

const getCouponsThunk = createAsyncThunk('user/getCoupons', async (data) => {
  // try {
  //   const snapshot = await db.collection('users').doc(uid).collection('coupons').get();
  //   let coupons = [];
  //   snapshot.docs.forEach((doc) => coupons.push(doc.data()));
  //   return coupons;
  // } catch (error) {
  //   throw error;
  // }
  try {
    let response = await fetch({
      url: `http://localhost:5000/api/authenticated/users/${data.uid}/coupons`,
      method: 'GET',
      headers: { Authorization: `BASIC ${data.idToken} ${data.refreshToken}` },
    });
    return response;
  } catch (e) {
    throw e;
  }
});

const changeUserInfoThunk = createAsyncThunk('user/changeUserInfo', async (data) => {
  try {
    let response = await fetch({
      url: `http://localhost:5000/api/authenticated/users/${data.uid}`,
      method: 'PUT',
      headers: { Authorization: `BASIC ${data.idToken} ${data.refreshToken}` },
      body: data.data,
    });

    return data.data;
  } catch (e) {
    throw e;
  }
});

export {
  loginUserThunk,
  signUpUserThunk,
  addOrderThunk,
  changeAddressThunk,
  signOutThunk,
  getOrdersThunk,
  getCouponsThunk,
  getAddressThunk,
  changeUserInfoThunk,
};
