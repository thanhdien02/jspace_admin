import { createSlice } from "@reduxjs/toolkit";

interface IAuth {
  user: any;
  accessToken: string;
}

const init: IAuth = {
  user: {},
  accessToken: "",
};
const authSlice: any = createSlice({
  name: "auth",
  initialState: init,
  reducers: {
    authChange: (state: any, action: any) => ({
      ...state,
      user: action.payload,
    }),
    authLogin: (state: any) => ({
      ...state,
    }),
    authUpdateUser: (state: any, action: any) => ({
      ...state,
      user: action.payload.user,
      accessToken: action.payload.accessToken,
    }),
  },
});
export const { authChange, authLogin, authUpdateUser } = authSlice.actions;
export default authSlice.reducer;
