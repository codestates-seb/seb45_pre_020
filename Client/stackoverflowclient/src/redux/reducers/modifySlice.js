import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modifyMode: false,
  post_id: '',
  type: '',
};

const modifySlice = createSlice({
  name: 'modifySlice',
  initialState,
  reducers: {
    setModifyMode(state, action) {
      const { modifyMode, post_id, type } = action.payload;
      state.modifyMode = modifyMode;
      state.post_id = post_id;
      state.type = type;
    },
  },
});

export const { setModifyMode } = modifySlice.actions;
export default modifySlice.reducer;
