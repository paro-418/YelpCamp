import { configureStore } from '@reduxjs/toolkit';
import campgroundSliceReducers from './campground-slice';
import userSliceReducers from './user-slice';

const store = configureStore({
  reducer: {
    campgroundReducers: campgroundSliceReducers,
    userReducers: userSliceReducers,
  },
});

export default store;
