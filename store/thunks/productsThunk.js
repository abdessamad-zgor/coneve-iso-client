import { createAsyncThunk } from '@reduxjs/toolkit';
import fetch from '../../helpers/fetch';

const getProductInView = createAsyncThunk('products/getProductInView', async (id) => {
  try {
    // let reviews = [];
    // const snapshot = await db.collection('products').doc(id).get();
    // const reviewsSnapshot = await db.collection('products').doc(id).collection('reviews').get();
    // reviewsSnapshot.forEach((doc) => {
    //   reviews.push({ ...doc.data() });
    // });

    // let payload = {
    //   productInView: { ...snapshot.data(), id: snapshot.id },
    //   reviews,
    // };
    // return payload;

    let response = await fetch({ url: `http://localhost:5000/api/products/${id}`, method: 'GET' });

    return response;
  } catch (e) {
    throw e;
  }
});

const populateIndex = createAsyncThunk('products/populateIndex', async () => {
  // const index = await db
  //   .collection('index')
  //   .doc('products')
  //   .get()
  //   .then((snapshot) => {
  //     const index = snapshot.data();
  //     return index;
  //   });
  // return index;
  try {
    let response = await fetch({ url: `http://localhost:5000/api/products/index`, method: 'GET' });

    return response;
  } catch (e) {
    throw e;
  }
});

const addReview = createAsyncThunk('products/addReview', async (params) => {
  try {
    // await db
    //   .collection('products')
    //   .doc(params.id)
    //   .collection('reviews')
    //   .add(JSON.parse(JSON.stringify(params.data)));

    // return { ...params.data };
    await fetch({
      url: `http://localhost:5000/api/authenticated/products/${params.id}/reviews`,
      method: 'POST',
      body: params.data,
      headers: {
        Authorization: `BASIC ${params.idToken} ${params.refreshToken}`,
      },
    });
    return { ...params.data };
  } catch (e) {
    throw e;
  }
});

export { getProductInView, populateIndex, addReview };
