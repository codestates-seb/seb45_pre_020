import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addClicked: false,
  answerId: '',
};

const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setAddClicked(state, action) {
      const { openInput, answerId } = action.payload;
      state.addClicked = openInput;
      state.answerId = answerId;
    },
  },
});

export const { setAddClicked } = commentSlice.actions;
export default commentSlice.reducer;
