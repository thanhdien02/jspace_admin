import authSaga from "./auth/auth-saga";
import userSaga from "./user/user-saga";
import adminSaga from "./admin/admin-saga";
import productSaga from "./product/product-saga";
import dashboardSaga from "./dashboard/dashboard-saga";
import companySaga from "./company/company-saga";
import purchasehistorySaga from "./purchase_history/purchase-history-saga";
import companyrequestreviewSaga from "./company_request_review/company-request-review-saga";
import { all, fork } from "redux-saga/effects";
export default function* rootSaga(): any {
  yield all([fork(authSaga)]);
  yield all([fork(userSaga)]);
  yield all([fork(adminSaga)]);
  yield all([fork(companySaga)]);
  yield all([fork(dashboardSaga)]);
  yield all([fork(productSaga)]);
  yield all([fork(purchasehistorySaga)]);
  yield all([fork(companyrequestreviewSaga)]);
}
