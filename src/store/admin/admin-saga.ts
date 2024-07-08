import { takeLatest } from "redux-saga/effects";
import {
  adminCreateSubAdmin,
  adminSendMailRequestConfirmCompanyAgain,
} from "./admin-slice";
import {
  handleAdminCreateSubAdmin,
  handleAdminSendMailRequestConfirmCompanyAgain,
} from "./admin-handlers";

export default function* adminSaga() {
  yield takeLatest(adminCreateSubAdmin.type, handleAdminCreateSubAdmin);
  yield takeLatest(
    adminSendMailRequestConfirmCompanyAgain.type,
    handleAdminSendMailRequestConfirmCompanyAgain
  );
}
