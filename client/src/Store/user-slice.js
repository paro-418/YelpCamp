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
    setUser(state, action) {
      console.log(action.payload);
      state.isLoggedIn = true;
      state.username = action.payload.username;
      state.userId = action.payload.userId;
    },
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
export const savedUser = (savedUserInfo) => {
  return (dispatch) => {
    dispatch(userSliceActions.setUser(savedUserInfo));
  };
};
export const requestLogin = (credentialsAndFunction) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        '/auth/login',
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
      credentialsAndFunction.storeCookieFn.set(
        'YELP_CAMP_USER_INFO',
        response.data.loggedInUser,
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
        '/auth/signup',
        credentialsAndFunction.credentials
      );
      dispatch(userSliceActions.loginUser(response.data.createdUser));
      credentialsAndFunction.cookies.set(
        'YELP_CAMP_USER_INFO',
        response.data.createdUser,
        {
          maxAge: 3600,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
};

export const requestLogout = (removeFn, { currentPath, navigateFn }) => {
  return async (dispatch) => {
    try {
      removeFn.remove('YELP_CAMP_JWT_TOKEN');
      removeFn.remove('YELP_CAMP_USER_INFO');
      dispatch(userSliceActions.logoutUser());
      if (
        currentPath.includes('post-review') ||
        currentPath.includes('add-campground')
      ) {
        navigateFn(-1);
      }
    } catch (err) {
      console.log(err);
    }
  };
};
export const userSliceActions = userSlice.actions;
export default userSlice.reducer;
