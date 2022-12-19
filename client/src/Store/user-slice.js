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

export const requestLogin = (credentialsAndFunction) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/auth/login',
        credentialsAndFunction.credentials
      );
      const loggedInUser = response.data.loggedInUser;
      dispatch(userSliceActions.loginUser(loggedInUser));
      credentialsAndFunction.storeCookieFn.set(
        'YELP_CAMP_JWT_TOKEN',
        loggedInUser.token,
        {
          maxAge: 3600,
        }
      );
    } catch (err) {
      console.log(err);
      console.log(err.response.data);
    }
  };
};

export const requestCreate = (credentialsAndFunction) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/auth/signup',
        credentialsAndFunction.credentials
      );
      dispatch(userSliceActions.loginUser(response.data.createdUser));
    } catch (err) {
      console.log(err);
    }
  };
};

export const requestLogout = (removeFn) => {
  // console.log(removeFn.remove);
  return async (dispatch) => {
    try {
      console.log('im running');
      removeFn.remove('YELP_CAMP_JWT_TOKEN');
      dispatch(userSliceActions.logoutUser());
    } catch (err) {
      console.log(err);
    }
  };
};
export const userSliceActions = userSlice.actions;
export default userSlice.reducer;
