import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addClicked: false,
};

const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setAddClicked(state, action) {
      state.addClicked = action.payload;
    },
  },
});

export const { setAddClicked } = commentSlice.actions;
export default commentSlice.reducer;
