import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const userInitialState = {
  isLoggedIn: false,
  username: undefined,
  userToken: null,
  userId: null,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState: userInitialState,
  reducers: {
    loginUser(state, action) {
      state.isLoggedIn = true;
      state.username = action.payload.username;
      state.userToken = action.payload.userToken;
      state.userId = action.payload.userId;
    },
    logoutUser(state) {
      state.isLoggedIn = false;
      state.userId = null;
      state.username = undefined;
      state.userToken = null;
    },
  },
});

export const requestLogin = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/auth/login',
        credentials
      );
      const loggedInUser = response.data.loggedInUser;
      dispatch(userSliceActions.loginUser(loggedInUser));
    } catch (err) {
      console.log(err.response.data);
    }
  };
};

export const requestCreate = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/auth/signup',
        credentials
      );
      dispatch(userSliceActions.loginUser(response.data.createdUser));
    } catch (err) {
      console.log(err);
    }
  };
};
export const userSliceActions = userSlice.actions;
export default userSlice.reducer;
