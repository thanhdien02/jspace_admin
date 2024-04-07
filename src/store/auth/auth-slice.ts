import { createSlice } from "@reduxjs/toolkit";

interface IAuth {
  user: any;
}

const init: IAuth = {
  user: {},
};
const authSlice: any = createSlice({
  name: "auth",
  initialState: init,
  reducers: {
    authChange: (state: any, action: any) => ({
      ...state,
      user: action.payload,
    }),
    authLogin: (state: any, action: any) => ({
      ...state,
      user: action.payload,
    }),
  },
});
export const { authChange, authLogin } = authSlice.actions;
export default authSlice.reducer;
