import { createSlice } from "@reduxjs/toolkit";

interface ICommon {
  user: any;
  notificationCheck?: boolean;
}

const init: ICommon = {
  user: {},
  notificationCheck: false,
};

const commonSlice: any = createSlice({
  name: "common",
  initialState: init,
  reducers: {
    commonUpdateNotificationRedux: (state: any, action: any) => ({
      ...state,
      notificationCheck: action.payload.notificationCheck,
    }),
  },
});
export const { commonUpdateNotificationRedux } = commonSlice.actions;
export default commonSlice.reducer;
