import { configureStore } from '@reduxjs/toolkit';
import commentSlice from './reducers/commentSilce';

export const store = configureStore({
  reducer: { Comment: commentSlice },
});
