import { createSlice } from "@reduxjs/toolkit";

interface IUser {
  companyrequestreview: any;
  paginationCompanyRequestReview?: any;
  loadingCompanyRequestReview?: boolean;
}

const init: IUser = {
  companyrequestreview: [],
  paginationCompanyRequestReview: {},
  loadingCompanyRequestReview: false,
};

const companyrequestreviewSlice: any = createSlice({
  name: "companyrequestreview",
  initialState: init,
  reducers: {
    companyrequestreviewGetCompanyRequest: () => {},
    companyrequestreviewUpdateCompanyRequest: () => {},
    companyrequestreviewUpdateCompanyRequestRedux: (
      state: any,
      action: any
    ) => ({
      ...state,
      companyrequestreview: action.payload.companyrequestreview,
    }),
    companyrequestreviewUpdatePaginationRedux: (state: any, action: any) => ({
      ...state,
      paginationCompanyRequestReview:
        action.payload.paginationCompanyRequestReview,
    }),
    companyrequestreviewUpdateLoadingRedux: (state: any, action: any) => ({
      ...state,
      loadingCompanyRequestReview: action.payload.loadingCompanyRequestReview,
    }),
  },
});
export const {
  companyrequestreviewGetCompanyRequest,
  companyrequestreviewUpdateCompanyRequestRedux,
  companyrequestreviewUpdatePaginationRedux,
  companyrequestreviewUpdateLoadingRedux,
  companyrequestreviewUpdateCompanyRequest,
} = companyrequestreviewSlice.actions;
export default companyrequestreviewSlice.reducer;
