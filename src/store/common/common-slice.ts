import { createSlice } from "@reduxjs/toolkit";

interface ICommon {
  user: any;
  notificationCheck?: boolean;
  exportData?: any;
}

const init: ICommon = {
  user: {},
  notificationCheck: false,
  exportData: {},
};

const commonSlice: any = createSlice({
  name: "common",
  initialState: init,
  reducers: {
    commonUpdateNotificationRedux: (state: any, action: any) => ({
      ...state,
      notificationCheck: action.payload.notificationCheck,
    }),
    commonUpdateExportDataRedux: (state: any, action: any) => ({
      ...state,
      exportData: action.payload.exportData,
    }),
  },
});
export const { commonUpdateNotificationRedux, commonUpdateExportDataRedux } =
  commonSlice.actions;
export default commonSlice.reducer;
