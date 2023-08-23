import { combineReducers } from 'redux';
import commentSlice from './commentSilce';
import searchSlice from './searchSlice';
import loginSlice from './loginSlice';
import signupSlice from './signupSlice';
import modifySlice from './modifySlice';

const rootReducer = combineReducers({
  loginSlice: loginSlice, // 실제 리듀서를 추가
  Comment: commentSlice,
  searchSlice: searchSlice,
  signupSlice: signupSlice,
  modifySlice: modifySlice,
  // 다른 리듀서들도 필요한 경우 추가
});

export default rootReducer;
