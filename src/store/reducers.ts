import authReducer from "./auth/auth-slice";
import userReducer from "./user/user-slice";
import adminReducer from "./admin/admin-slice";
import commonReducer from "./common/common-slice";
import companyReducer from "./company/company-slice";
import productReducer from "./product/product-slice";
import purchasehistoryReducer from "./purchase_history/purchase-history-slice";
import companyrequestreviewReducer from "./company_request_review/company-request-review-slice";
import { combineReducers } from "@reduxjs/toolkit";

export const reducer: any = combineReducers({
  auth: authReducer,
  user: userReducer,
  admin: adminReducer,
  common: commonReducer,
  company: companyReducer,
  product: productReducer,
  purchasehistory: purchasehistoryReducer,
  companyrequestreview: companyrequestreviewReducer,
});
