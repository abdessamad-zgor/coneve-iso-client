import { createSlice } from '@reduxjs/toolkit';

import { getProductInView, populateIndex, addReview } from '../thunks/productsThunk';

const initialState = () => {
  return {
    inView: { status: 'idle', error: null, value: {} },
    index: { status: 'idle', error: null, value: {} },
    reviews: { status: 'idle', error: null, data: [] },
  };
};

const productSlice = createSlice({
  name: 'products',
  initialState: initialState(),
  reducers: {
    resetStatus: (state) => {
      state.inView.status = 'idle';
      state.index.status = 'idle';
      state.reviews.status = 'idle';
    },

    default: (state) => {
      return state;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getProductInView.pending, (state, action) => {
        state.inView.status = 'loading';
        state.reviews.status = 'loading';
        state.reviews.error = null;
        state.inView.error = null;
      })
      .addCase(getProductInView.fulfilled, (state, action) => {
        state.inView.status = 'completed';
        state.reviews.status = 'completed';
        state.reviews.data = action.payload.reviews;
        state.inView.value = action.payload.productInView;
      })
      .addCase(getProductInView.rejected, (state, action) => {
        state.inView.error = action.error;
        state.reviews.error = action.error;
        state.inView.status = 'failed';
        state.reviews.status = 'failed';
      })
      .addCase(populateIndex.pending, (state, action) => {
        state.index.status = 'loading';
        state.index.error = null;
      })
      .addCase(populateIndex.fulfilled, (state, action) => {
        state.index.status = 'completed';
        state.index.value = action.payload;
      })
      .addCase(populateIndex.rejected, (state, action) => {
        state.index.status = 'failed';
        state.index.error = action.error;
      })
      .addCase(addReview.pending, (state, action) => {
        state.reviews.status = 'loading';
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.reviews.status = 'completed';
        state.reviews.data.push(action.payload);
      })
      .addCase(addReview.rejected, (state, action) => {
        state.reviews.error = action.error;

        state.reviews.status = 'failed';
      })
      .addDefaultCase((state, action) => {});
  },
});

export const { resetStatus } = productSlice.actions;

export default productSlice.reducer;
