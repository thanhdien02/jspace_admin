import { call, put } from "redux-saga/effects";
import { getToken } from "../../utils/auth";
import {
  companyrequestreviewUpdateCompanyRequestRedux,
  companyrequestreviewUpdateLoadingRedux,
  companyrequestreviewUpdatePaginationRedux,
} from "./company-request-review-slice";
import {
  requestCompanyRequestReviewGetCompanyRequestReview,
  requestCompanyRequestReviewUpdateCompanyRequestReview,
} from "./company-request-review-requests";

function* handleCompanyRequestReviewGetCompanyRequestReview(
  dataGetCompanyRequest: any
): Generator<any> {
  try {
    yield put(
      companyrequestreviewUpdateLoadingRedux({
        loadingCompanyRequestReview: true,
      })
    );
    const { accessToken } = getToken();
    const response: any = yield call(
      requestCompanyRequestReviewGetCompanyRequestReview,
      dataGetCompanyRequest?.payload?.page,
      accessToken,
      dataGetCompanyRequest?.payload?.reviewed
    );
    if (response.data.code === 1000) {
      yield put(
        companyrequestreviewUpdateCompanyRequestRedux({
          companyrequestreview: response.data.result.content,
        })
      );
      yield put(
        companyrequestreviewUpdatePaginationRedux({
          paginationCompanyRequestReview: {
            pageNumber: response.data.result.pageNumber,
            pageSize: response.data.result.pageSize,
            totalElements: response.data.result.totalElements,
            totalPages: response.data.result.totalPages,
            numberOfElements: response.data.result.numberOfElements,
          },
        })
      );
    }
  } catch (error) {
  } finally {
    yield put(
      companyrequestreviewUpdateLoadingRedux({
        loadingCompanyRequestReview: false,
      })
    );
  }
}
function* handleCompanyRequestReviewUpdateCompanyRequestReview(
  dataUpdateCompanyRequest: any
): Generator<any> {
  try {
    yield put(
      companyrequestreviewUpdateLoadingRedux({
        loadingCompanyRequestReview: true,
      })
    );
    const { accessToken } = getToken();
    const response: any = yield call(
      requestCompanyRequestReviewUpdateCompanyRequestReview,
      dataUpdateCompanyRequest?.payload,
      accessToken
    );
    if (response.data.code === 1000) {
      yield call(handleCompanyRequestReviewGetCompanyRequestReview, {
        payload: {
          page: dataUpdateCompanyRequest?.payload?.page,
        },
      });
    }
  } catch (error) {
  } finally {
    yield put(
      companyrequestreviewUpdateLoadingRedux({
        loadingCompanyRequestReview: false,
      })
    );
  }
}
export {
  handleCompanyRequestReviewGetCompanyRequestReview,
  handleCompanyRequestReviewUpdateCompanyRequestReview,
};
