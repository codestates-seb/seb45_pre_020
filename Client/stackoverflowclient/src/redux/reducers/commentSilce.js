import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addClicked: false,
  post_id: '',
};

const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setAddClicked(state, action) {
      const { openInput, post_id } = action.payload;
      state.addClicked = openInput;
      state.post_id = post_id;
    },
  },
});

export const { setAddClicked } = commentSlice.actions;
export default commentSlice.reducer;
