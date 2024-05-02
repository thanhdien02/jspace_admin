import { takeLatest } from "redux-saga/effects";
import {
  companyrequestreviewGetCompanyRequest,
  companyrequestreviewUpdateCompanyRequest,
} from "./company-request-review-slice";
import {
  handleCompanyRequestReviewGetCompanyRequestReview,
  handleCompanyRequestReviewUpdateCompanyRequestReview,
} from "./company-request-review-handlers";

export default function* authSaga() {
  yield takeLatest(
    companyrequestreviewGetCompanyRequest.type,
    handleCompanyRequestReviewGetCompanyRequestReview
  );
  yield takeLatest(
    companyrequestreviewUpdateCompanyRequest.type,
    handleCompanyRequestReviewUpdateCompanyRequestReview
  );
}
