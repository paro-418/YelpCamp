import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const campsInitialState = { allCamps: [] };

const campgroundSlice = createSlice({
  initialState: campsInitialState,
  name: 'allCampsSlice',
  reducers: {
    setAllCamps(oldState, action) {
      oldState.allCamps = action.payload.allCamps;
    },
    postCamp(oldState) {},
  },
});

export const fetchAllCamps = () => {
  return async (dispatch) => {};
};

export const campgroundSliceActions = campgroundSlice.actions;
export default campgroundSlice.reducer;
