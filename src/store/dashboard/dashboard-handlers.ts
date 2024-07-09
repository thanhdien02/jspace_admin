import { call, put } from "redux-saga/effects";
import { getToken, Token } from "../../utils/auth";
import { message } from "antd";
import {
  dashboardUpdateDashboardCompanyMonthRedux,
  dashboardUpdateDashboardCompanyYearRedux,
  dashboardUpdateDashboardNumberAllRedux,
  dashboardUpdateDashboardPostMonthRedux,
  dashboardUpdateDashboardPostYearRedux,
  dashboardUpdateDashboardUserMonthRedux,
  dashboardUpdateDashboardUserYearRedux,
  dashboardUpdateLoadingRedux,
} from "./dashboard-slice";
import {
  requestDashboardGetDashboardCompanyMonth,
  requestDashboardGetDashboardCompanyYear,
  requestDashboardGetDashboardNumberAll,
  requestDashboardGetDashboardPostMonth,
  requestDashboardGetDashboardPostYear,
  requestDashboardGetDashboardUserMonth,
  requestDashboardGetDashboardUserYear,
} from "./dashboard-requests";

function* handleDashboardGetDashboardUserMonth(
  dataGetDashboard: any
): Generator<any> {
  try {
    yield put(dashboardUpdateLoadingRedux({ loadingDashboard: true }));
    const token: Token = getToken();

    const response: any = yield call(
      requestDashboardGetDashboardUserMonth,
      dataGetDashboard?.payload?.year,
      dataGetDashboard?.payload?.month,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      yield put(
        dashboardUpdateDashboardUserMonthRedux({
          dashboardUserMonth: response?.data?.result,
        })
      );
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(dashboardUpdateLoadingRedux({ loadingDashboard: false }));
  }
}
function* handleDashboardGetDashboardUserYear(
  dataGetDashboard: any
): Generator<any> {
  try {
    yield put(dashboardUpdateLoadingRedux({ loadingDashboard: true }));
    const token: Token = getToken();
    const response: any = yield call(
      requestDashboardGetDashboardUserYear,
      dataGetDashboard?.payload?.year,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      console.log("🚀 ~ response?.data:", response?.data);
      yield put(
        dashboardUpdateDashboardUserYearRedux({
          dashboardUserYear: response?.data?.result,
        })
      );
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(dashboardUpdateLoadingRedux({ loadingDashboard: false }));
  }
}
function* handleDashboardGetDashboardCompanyMonth(
  dataGetDashboard: any
): Generator<any> {
  try {
    yield put(dashboardUpdateLoadingRedux({ loadingDashboard: true }));
    const token: Token = getToken();
    const response: any = yield call(
      requestDashboardGetDashboardCompanyMonth,
      dataGetDashboard?.payload?.year,
      dataGetDashboard?.payload?.month,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      yield put(
        dashboardUpdateDashboardCompanyMonthRedux({
          dashboardCompanyMonth: response?.data?.result,
        })
      );
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(dashboardUpdateLoadingRedux({ loadingDashboard: false }));
  }
}
function* handleDashboardGetDashboardCompanyYear(
  dataGetDashboard: any
): Generator<any> {
  try {
    yield put(dashboardUpdateLoadingRedux({ loadingDashboard: true }));
    const token: Token = getToken();
    const response: any = yield call(
      requestDashboardGetDashboardCompanyYear,
      dataGetDashboard?.payload?.year,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      yield put(
        dashboardUpdateDashboardCompanyYearRedux({
          dashboardCompanyYear: response?.data?.result,
        })
      );
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(dashboardUpdateLoadingRedux({ loadingDashboard: false }));
  }
}
function* handleDashboardGetDashboardPostMonth(
  dataGetDashboard: any
): Generator<any> {
  try {
    yield put(dashboardUpdateLoadingRedux({ loadingDashboard: true }));
    const token: Token = getToken();
    const response: any = yield call(
      requestDashboardGetDashboardPostMonth,
      dataGetDashboard?.payload?.year,
      dataGetDashboard?.payload?.month,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      yield put(
        dashboardUpdateDashboardPostMonthRedux({
          dashboardPostMonth: response?.data?.result,
        })
      );
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(dashboardUpdateLoadingRedux({ loadingDashboard: false }));
  }
}
function* handleDashboardGetDashboardPostYear(
  dataGetDashboard: any
): Generator<any> {
  try {
    yield put(dashboardUpdateLoadingRedux({ loadingDashboard: true }));
    const token: Token = getToken();
    const response: any = yield call(
      requestDashboardGetDashboardPostYear,
      dataGetDashboard?.payload?.year,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      yield put(
        dashboardUpdateDashboardPostYearRedux({
          dashboardPostYear: response?.data?.result,
        })
      );
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(dashboardUpdateLoadingRedux({ loadingDashboard: false }));
  }
}
function* handleDashboardGetDashboardNumberAll(): Generator<any> {
  try {
    yield put(dashboardUpdateLoadingRedux({ loadingDashboard: true }));
    const token: Token = getToken();
    const response: any = yield call(
      requestDashboardGetDashboardNumberAll,
      token?.accessToken
    );
    if (response?.data?.code === 1000) {
      yield put(
        dashboardUpdateDashboardNumberAllRedux({
          dashboardNumberAll: response?.data?.result,
        })
      );
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(dashboardUpdateLoadingRedux({ loadingDashboard: false }));
  }
}
export {
  handleDashboardGetDashboardUserMonth,
  handleDashboardGetDashboardUserYear,
  handleDashboardGetDashboardPostMonth,
  handleDashboardGetDashboardPostYear,
  handleDashboardGetDashboardCompanyMonth,
  handleDashboardGetDashboardCompanyYear,
  handleDashboardGetDashboardNumberAll,
};
