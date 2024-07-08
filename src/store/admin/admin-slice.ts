import { createSlice } from "@reduxjs/toolkit";

interface IAdmin {
  admin: any;
  loading?: boolean;
  messageAdmin?: string;
}

const init: IAdmin = {
  admin: {},
  loading: false,
  messageAdmin: "",
};
const adminSlice: any = createSlice({
  name: "admin",
  initialState: init,
  reducers: {
    adminSendMailRequestConfirmCompanyAgain: () => {},
    adminCreateSubAdmin: (state: any, action: any) => ({
      ...state,
      user: action.payload,
    }),
    adminUploadLoading: (state, action) => ({
      ...state,
      loading: action.payload.loading,
    }),
    adminUploadMessageRedux: (state, action) => ({
      ...state,
      messageAdmin: action.payload.messageAdmin,
    }),
  },
});
export const {
  adminCreateSubAdmin,
  adminUploadLoading,
  adminUploadMessageRedux,
  adminSendMailRequestConfirmCompanyAgain,
} = adminSlice.actions;
export default adminSlice.reducer;
