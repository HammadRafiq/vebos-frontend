import { createSlice } from "@reduxjs/toolkit";
import { loginSuccess, authMeSuccess } from "./extra-reducers";
import { AuthState } from "./auth.type";
import { authAPI } from "@root/src/service/auth";
import { setSessionStorage } from "@root/src/utils/session-storage";

const initialState: AuthState = {
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
  userType: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state: AuthState) => {
      state.isAuthenticated = initialState.isAuthenticated;
      state.userType = initialState.userType;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authAPI.endpoints.brandLogin.matchFulfilled,
      loginSuccess
    );
    builder.addMatcher(
      authAPI.endpoints.creatorLogin.matchFulfilled,
      loginSuccess
    );
  },
});

export const authActions = slice.actions;
export const authReducer = slice.reducer;
