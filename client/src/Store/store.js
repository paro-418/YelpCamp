import { configureStore } from '@reduxjs/toolkit';
import campgroundSliceReducers from './campground-slice';
import userSliceReducers from './user-slice';
import reviewSliceReducers from './review-slice';

const store = configureStore({
  reducer: {
    campgroundReducers: campgroundSliceReducers,
    userReducers: userSliceReducers,
    reviewReducers: reviewSliceReducers,
  },
});

export default store;
