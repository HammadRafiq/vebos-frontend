import type { PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "./auth.type";
import { setSessionStorage } from "@root/src/utils/session-storage";

type LoginAction = PayloadAction<any>;

export const loginSuccess = (state: AuthState, action: LoginAction): void => {
  const data = action.payload;

  state.accessToken = data.token;
  state.refreshToken = data.refreshToken ?? null;
  state.userType = data?.userType;
  state.isAuthenticated = true;

  setSessionStorage("accessToken", data.token);
  setSessionStorage("refreshToken", data.refreshToken ?? null);
};

export const authMeSuccess = (state: AuthState, action: LoginAction): void => {
  const { data } = action.payload;
  state.accessToken = data.authToken;
  state.refreshToken = data.refreshToken;
  state.isAuthenticated = true;

  setSessionStorage("accessToken", data.authToken);
  setSessionStorage("refreshToken", data.refreshToken);
};
