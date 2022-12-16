import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const reviewInitialState = {
  allReviews: [],
  reviewBy: undefined,
};

const reviewSlice = createSlice({
  name: 'review-slice',
  initialState: reviewInitialState,
  reducers: {
    setAllReviews(state, action) {
      state.allReviews = action.payload;
    },
  },
});

export const postReview = (review) => {
  return async (dispatch) => {};
};

export const reviewSliceActions = reviewSlice.actions;
export default reviewSlice.reducer;
