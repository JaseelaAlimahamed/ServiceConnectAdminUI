import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    // accessToken: null,
    // isLoggedIn: false,
    // userLoading: false, 
    // tokenLoading: false,  
    role: null,
  },
  reducers: {
    // setAccessToken: (state, action) => {
    //   state.accessToken = action.payload;
    //   state.isLoggedIn = true;  
    // },
    // clearAccessToken: (state) => {
    //   state.accessToken = null;
    //   state.isLoggedIn = false;
    // },
    // authUserLoading: (state, action) => {
    //   const { payload } = action;
    //   state.userLoading = payload?.loading;  
    // },
    // toggleUserLoading: (state) => {
    //   state.userLoading = !state.userLoading;  
    // },
    // authUserLogout(state) {
    //   state.accessToken = null;
    //   state.isLoggedIn = false; 
    // },

    changeRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const {changeRole } = authSlice.actions;
export default authSlice.reducer;
