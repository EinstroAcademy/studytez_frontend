import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { redirect } from 'react-router-dom';
import request, { NodeURL } from '../../api/api';



// Initial state
const initialState = {
  loading: false,
  user: null,
  error: '',
};

// Thunk function
export const fetchUser = () => async (dispatch) => {
  dispatch(fetchUserStart());
  try {
    const response = await request({
      url:'/get/user',
      method:'POST',
      data:{token:localStorage.getItem('app-token')}
    })

    console.log(response)
    
    dispatch(fetchUserSuccess(response.user));
    if(response.status==="00"){
        localStorage.removeItem('app-token')
    }
  } catch (error) {
    dispatch(fetchUserFailure(error.message));
  }
};


const profileSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchUserStart: (state) => {
        state.loading = true;
        state.error = '';
      },
      fetchUserSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
      },
      fetchUserFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });
  
  export const {
    fetchUserStart,
    fetchUserSuccess,
    fetchUserFailure,
  } = profileSlice.actions;
  
  export default profileSlice.reducer;
  