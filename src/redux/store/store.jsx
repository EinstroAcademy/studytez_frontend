// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/loginSlice'
import authProfile from '../features/profileSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    profile:authProfile
  },
});

export default store;
