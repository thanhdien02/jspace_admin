import { createSlice } from "@reduxjs/toolkit";

interface IDashboard {
  dashboardUser: any;
  dashboardUserYear: any;
  dashboardPostMonth: any;
  dashboardPostYear: any;
  dashboardCompanyMonth: any;
  dashboardCompanyYear: any;
  loadingDashboard?: boolean;
  messageDashboerd?: string;
  paginationDashboard?: any;
}

const init: IDashboard = {
  dashboardUser: {},
  dashboardUserYear: {},
  dashboardPostMonth: {},
  dashboardPostYear: {},
  dashboardCompanyMonth: {},
  dashboardCompanyYear: {},
  loadingDashboard: false,
  messageDashboerd: "",
  paginationDashboard: {},
};
const dashboardSlice: any = createSlice({
  name: "dashboard",
  initialState: init,
  reducers: {
    dashboardGetDashboardUserMonth: () => {},
    dashboardGetDashboardUserYear: () => {},
    dashboardGetDashboardPostMonth: () => {},
    dashboardGetDashboardPostYear: () => {},
    dashboardGetDashboardCompanyMonth: () => {},
    dashboardGetDashboardCompanyYear: () => {},
    dashboardUpdateDashboardUserMonthRedux: (state, action) => ({
      ...state,
      dashboardUserMonth: action.payload.dashboardUserMonth,
    }),
    dashboardUpdateDashboardUserYearRedux: (state, action) => ({
      ...state,
      dashboardUserYear: action.payload.dashboardUserYear,
    }),
    dashboardUpdateDashboardPostMonthRedux: (state, action) => ({
      ...state,
      dashboardPostMonth: action.payload.dashboardPostMonth,
    }),
    dashboardUpdateDashboardPostYearRedux: (state, action) => ({
      ...state,
      dashboardPostYear: action.payload.dashboardPostYear,
    }),
    dashboardUpdateDashboardCompanyMonthRedux: (state, action) => ({
      ...state,
      dashboardCompanyMonth: action.payload.dashboardCompanyMonth,
    }),
    dashboardUpdateDashboardCompanyYearRedux: (state, action) => ({
      ...state,
      dashboardCompanyYear: action.payload.dashboardCompanyYear,
    }),
    dashboardUpdateLoadingRedux: (state, action) => ({
      ...state,
      loadingDashboard: action.payload.loadingDashboard,
    }),
    dashboardUpdatePaginationRedux: (state, action) => ({
      ...state,
      paginationDashboard: action.payload.paginationDashboard,
    }),
    dashboardUpdateMessageRedux: (state, action) => ({
      ...state,
      messageDashboard: action.payload.messageDashboard,
    }),
  },
});
export const {
  dashboardUpdateLoadingRedux,
  dashboardUpdatePaginationRedux,
  dashboardUpdateMessageRedux,
  dashboardGetDashboardUserMonth,
  dashboardGetDashboardUserYear,
  dashboardUpdateDashboardUserYearRedux,
  dashboardGetDashboardPostYear,
  dashboardGetDashboardPostMonth,
  dashboardUpdateDashboardUserMonthRedux,
  dashboardUpdateDashboardPostMonthRedux,
  dashboardUpdateDashboardPostYearRedux,
  dashboardGetDashboardCompanyMonth,
  dashboardGetDashboardCompanyYear,
  dashboardUpdateDashboardCompanyMonthRedux,
  dashboardUpdateDashboardCompanyYearRedux,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
