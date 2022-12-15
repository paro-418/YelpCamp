import { createSlice } from '@reduxjs/toolkit';

const userInitialState = {
  isLoggedIn: false,
  username: undefined,
  userToken: undefined,
  userId: undefined,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState: userInitialState,
  reducers: {},
});

export const userSliceActions = userSlice.actions;
export default userSlice.reducer;
