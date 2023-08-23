import { createSlice } from '@reduxjs/toolkit';

const signupSlice = createSlice({
  name: 'signupSlice',
  initialState: {
    users: [],
  },
  reducers: {
    signup: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { signup } = signupSlice.actions;
export default signupSlice.reducer;
