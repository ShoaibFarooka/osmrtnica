import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  email: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      return {
        email: action.payload.email,
        isLogin: action.payload.isLogin,
      };
    },
    logout(state) {
      return {
        email: "",
        isLogin: false,
      };
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
