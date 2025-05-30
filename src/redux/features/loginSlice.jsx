import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('app-token') ?? null,
  user: null
};



const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user
    },
    oAuthToken (state,action){
      state.token = action.payload
      state.user = null
    },
    clearToken(state) {
      state.token = null;
      state.user = null;
    }
  },
});

export const { setToken, clearToken, oAuthToken} = authSlice.actions;
export default authSlice.reducer;
