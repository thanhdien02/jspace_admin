import { createSlice } from "@reduxjs/toolkit";

interface IAuth {
  user: any;
  accessToken: string;
  loading: boolean;
}

const init: IAuth = {
  user: {},
  accessToken: "",
  loading: false,
};
const authSlice: any = createSlice({
  name: "auth",
  initialState: init,
  reducers: {
    authLogin: (state: any) => ({
      ...state,
    }),
    authUpdateUser: (state: any, action: any) => ({
      ...state,
      user: action.payload.user,
      accessToken: action.payload.accessToken,
    }),
    authFetchMe: (state: any) => ({
      ...state,
    }),
    authLogout: (state: any) => ({
      ...state,
    }),
    authUploadLoading: (state, action) => ({
      ...state,
      loading: action.payload.loading,
    }),
  },
});
export const {
  authChange,
  authLogin,
  authUpdateUser,
  authFetchMe,
  authUploadLoading,
  authLogout,
} = authSlice.actions;
export default authSlice.reducer;
