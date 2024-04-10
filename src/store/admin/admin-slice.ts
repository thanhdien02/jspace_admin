import { createSlice } from "@reduxjs/toolkit";

interface IAdmin {
  admin: any;
  loading: boolean;
}

const init: IAdmin = {
  admin: {},
  loading: false,
};
const adminSlice: any = createSlice({
  name: "admin",
  initialState: init,
  reducers: {
    adminCreateSubAdmin: (state: any, action: any) => ({
      ...state,
      user: action.payload,
    }),
    adminUploadLoading: (state, action) => ({
      ...state,
      loading: action.payload.loading,
    }),
  },
});
export const { adminCreateSubAdmin, adminUploadLoading } = adminSlice.actions;
export default adminSlice.reducer;
