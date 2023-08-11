import { configureStore } from '@reduxjs/toolkit';
import commentSlice from './reducers/commentSilce';
import searchSlice from './reducers/searchSlice';

export const store = configureStore({
  reducer: { Comment: commentSlice, searchSlice: searchSlice },
});
