import authReducer from "./auth/auth-slice";
import userReducer from "./user/user-slice";
import adminReducer from "./admin/admin-slice";
import { combineReducers } from "@reduxjs/toolkit";
// const { combineReducers }: any = require("@reduxjs/toolkit");

export const reducer: any = combineReducers({
  auth: authReducer,
  user: userReducer,
  admin: adminReducer,
});
