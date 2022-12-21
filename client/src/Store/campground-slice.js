import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const campsInitialState = {
  allCamps: [],
  categories: [
    'mountain',
    'beach',
    'forest',
    'riverside',
    'snow',
    'grassland',
    'waterfall',
    'island',
  ],
};

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
        `/campgrounds/all-campgrounds`
      );
      dispatch(campgroundSlice.actions.setAllCamps(response.data.allCamps));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchSpecificCamps = (category) => {
  return async (dispatch) => {
    try {
      if (category === '#') {
        return dispatch(fetchAllCamps());
      }
      const response = await axios.get(
        `/campgrounds/category/${category}`
      );
      dispatch(campgroundSlice.actions.setAllCamps(response.data.camps));

    } catch (err) {
      console.log(err);
    }
  };
};

export const sendNewCampground = (newCampGround) => {
  return async (dispatch) => {
    try {
      await axios.post(`/campgrounds/add-campground`, {
        campImage: newCampGround.campImage,
        campName: newCampGround.campName,
        price: newCampGround.price,
        campDescription: newCampGround.campDescription,
        category: newCampGround.category,
      });
      dispatch(fetchAllCamps());
    } catch (err) {
      console.log(err);
    }
  };
};

export const campgroundSliceActions = campgroundSlice.actions;
export default campgroundSlice.reducer;
