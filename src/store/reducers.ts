import authReducer from "./auth/auth-slice";
import { combineReducers } from "@reduxjs/toolkit";
// const { combineReducers }: any = require("@reduxjs/toolkit");

export const reducer: any = combineReducers({
  auth: authReducer,
});
