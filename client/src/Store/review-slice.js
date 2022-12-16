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
    addReviewInArray(state, action) {
      state.allReviews.push(action.payload);
    },
  },
});

export const postReview = (reviewInfo) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/campgrounds/post-review/${reviewInfo.reviewedCamp}`,
        reviewInfo
      );
      dispatch(
        reviewSliceActions.addReviewInArray(response.data.createdReview)
      );
    } catch (err) {
      console.log(err);
    }
  };
};

export const reviewSliceActions = reviewSlice.actions;
export default reviewSlice.reducer;
