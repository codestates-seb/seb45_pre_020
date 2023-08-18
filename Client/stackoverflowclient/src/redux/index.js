import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage를 사용하려면 이렇게 import
import rootReducer from './reducers/rootReducer'; // rootReducer를 import

const persistConfig = {
  key: 'root', // 저장소에 저장될 키 (아무 문자열)
  storage, // 스토리지 설정 (localStorage, sessionStorage 등)
  whitelist: ['loginSlice'],
  blacklist: ['Comment', 'searchSlice', 'signupSlice'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware({ serializableCheck: false })];
  },
});

export const persistor = persistStore(store);
