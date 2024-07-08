import { createSlice } from "@reduxjs/toolkit";

interface IAuth {
  users: any;
  accessToken: string;
  loading?: boolean;
  message?: string;
  messageRefresh?: string;
}

const init: IAuth = {
  users: {},
  accessToken: "",
  loading: false,
  message: "",
  messageRefresh: "",
};
const authSlice: any = createSlice({
  name: "auth",
  initialState: init,
  reducers: {
    authLogin: (state: any) => ({
      ...state,
    }),
    authUpdateUserRedux: (state: any, action: any) => ({
      ...state,
      users: action.payload.users,
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
    authUploadMessageRedux: (state, action) => ({
      ...state,
      message: action.payload.message,
    }),
    authUploadMessageRefreshRedux: (state, action) => ({
      ...state,
      messageRefresh: action.payload.messageRefresh,
    }),
  },
});
export const {
  authChange,
  authLogin,
  authUpdateUserRedux,
  authFetchMe,
  authUploadLoading,
  authLogout,
  authUploadMessageRedux,
  authUploadMessageRefreshRedux,
} = authSlice.actions;
export default authSlice.reducer;
