import { takeLatest } from "redux-saga/effects";
import {
  dashboardGetDashboardCompanyMonth,
  dashboardGetDashboardCompanyYear,
  dashboardGetDashboardNumberAll,
  dashboardGetDashboardPostMonth,
  dashboardGetDashboardPostYear,
  dashboardGetDashboardUserMonth,
  dashboardGetDashboardUserYear,
} from "./dashboard-slice";
import {
  handleDashboardGetDashboardCompanyMonth,
  handleDashboardGetDashboardCompanyYear,
  handleDashboardGetDashboardNumberAll,
  handleDashboardGetDashboardPostMonth,
  handleDashboardGetDashboardPostYear,
  handleDashboardGetDashboardUserMonth,
  handleDashboardGetDashboardUserYear,
} from "./dashboard-handlers";

export default function* dashboardSaga() {
  yield takeLatest(
    dashboardGetDashboardUserMonth.type,
    handleDashboardGetDashboardUserMonth
  );
  yield takeLatest(
    dashboardGetDashboardUserYear.type,
    handleDashboardGetDashboardUserYear
  );
  yield takeLatest(
    dashboardGetDashboardPostMonth.type,
    handleDashboardGetDashboardPostMonth
  );
  yield takeLatest(
    dashboardGetDashboardPostYear.type,
    handleDashboardGetDashboardPostYear
  );
  yield takeLatest(
    dashboardGetDashboardCompanyMonth.type,
    handleDashboardGetDashboardCompanyMonth
  );
  yield takeLatest(
    dashboardGetDashboardCompanyYear.type,
    handleDashboardGetDashboardCompanyYear
  );
  yield takeLatest(
    dashboardGetDashboardNumberAll.type,
    handleDashboardGetDashboardNumberAll
  );
}
