import { configureStore } from '@reduxjs/toolkit';
import commentSlice from './reducers/commentSilce';
import searchSlice from './reducers/searchSlice';
import loginSlice from './reducers/loginSlice';
import signupSlice from './reducers/signupSlice';

export const store = configureStore({
  reducer: {
    Comment: commentSlice,
    searchSlice: searchSlice,
    loginSlice: loginSlice,
    signupSlice: signupSlice,
  },
});
