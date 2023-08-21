import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modifyMode: false,
  post_id: '',
};

const modifySlice = createSlice({
  name: 'modifySlice',
  initialState,
  reducers: {
    setModifyMode(state, action) {
      const { modifyMode, post_id } = action.payload;
      state.modifyMode = modifyMode;
      state.post_id = post_id;
    },
  },
});

export const { setModifyMode } = modifySlice.actions;
export default modifySlice.reducer;
