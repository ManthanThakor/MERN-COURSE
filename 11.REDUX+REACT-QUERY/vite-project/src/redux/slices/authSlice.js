import { createSlice } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
  isAuthenticated: false,
  user: JSON.parse(localStorage.getItem("userInfo")) || null,
};

// Create slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      localStorage.removeItem("userInfo");
      state.user = null;
    },
  },
});

// Export actions
export const { login, logout } = authSlice.actions;

// Export reducer
export default authSlice.reducer;

// Export selectors
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUser = (state) => state.auth.user;
