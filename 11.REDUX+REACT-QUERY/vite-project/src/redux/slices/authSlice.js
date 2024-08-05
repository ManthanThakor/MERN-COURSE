import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const authSlice = createSlice({
  //! Initial state
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  //! reducers
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

//! Export reducer

export const { login, logout } = authSlice.actions;
const authReducer = authSlice.reducer;

export default authReducer;

//! Export selectors

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUser = (state) => state.auth.user;
