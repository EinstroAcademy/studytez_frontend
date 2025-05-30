import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { redirect } from 'react-router-dom';



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
    const response = await axios.post('http://localhost:4000/get/user',{token:localStorage.getItem('app-token')},{
        headers:{
            Authorization:localStorage.getItem('app-token')
        }
    });
    dispatch(fetchUserSuccess(response.data.user));
    if(response.data.status==="00"){
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
  