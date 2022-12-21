import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const reviewInitialState = {
  allReviews: [],
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

export const postReview = (reviewAndFunction) => {
  return async () => {
    try {
      await axios.post(
        `/campgrounds/review/post-review/${reviewAndFunction.review.reviewedCamp}`,
        reviewAndFunction.review
      );
      reviewAndFunction.navigate(-1);
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchAllReviews = (campId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `/campgrounds/review/get-reviews/${campId}`
      );

      dispatch(reviewSliceActions.setAllReviews(response.data.allReviews));
    } catch (err) {
      console.log(err);
    }
  };
};

export const reviewSliceActions = reviewSlice.actions;
export default reviewSlice.reducer;
