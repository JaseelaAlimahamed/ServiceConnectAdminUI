import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: null,
    user: null,
    role: null,
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    clearAccessToken: (state) => {
      state.accessToken = null;
    },
    loginUser: (state, action) => {
      // Store access token and user data from the response
      state.accessToken = action.payload.access;
      state.user = {
        id: action.payload.user_id,
        email: action.payload.email,
        fullName: action.payload.full_name,
        isDealer: action.payload.is_dealer,
      };
    },
    changeRole: (state, action) => {
      state.role = action.payload;
      console.log(state);
    },
    logout: (state) => {
      state.role = null;
      state.accessToken = null;
      state.user = null;
    },
  },
});

export const {
  changeRole,
  logout,
  setAccessToken,
  clearAccessToken,
  loginUser,
} = authSlice.actions;
export default authSlice.reducer;
