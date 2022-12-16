import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const campsInitialState = { allCamps: [] };

const campgroundSlice = createSlice({
  initialState: campsInitialState,
  name: 'allCampsSlice',
  reducers: {
    setAllCamps(oldState, action) {
      oldState.allCamps = action.payload;
    },
  },
});

export const fetchAllCamps = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/campgrounds/all-campgrounds`
      );
      dispatch(campgroundSlice.actions.setAllCamps(response.data.allCamps));
    } catch (err) {
      console.log(err);
    }
  };
};

export const sendNewCampground = (newCampGround) => {
  return async (dispatch) => {
    try {
      await axios.post(
        `http://localhost:5000/campgrounds/add-campground`,
        {
          campImage: newCampGround.campImage,
          campName: newCampGround.campName,
          price: newCampGround.price,
          campDescription: newCampGround.campDescription,
        }
      );
      dispatch(fetchAllCamps());
    } catch (err) {
      console.log(err);
    }
  };
};

export const campgroundSliceActions = campgroundSlice.actions;
export default campgroundSlice.reducer;
