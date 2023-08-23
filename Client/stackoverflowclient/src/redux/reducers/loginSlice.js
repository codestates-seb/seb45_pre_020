import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  user: null,
  accessToken: null,
  refreshToken: null,
};

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
    login: (state, action) => {
      const { accessToken, refreshToken, username } = action.payload;
      state.isLogin = true;
      state.user = username;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
    },
    logout: (state) => {
      state.isLogin = false;
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
