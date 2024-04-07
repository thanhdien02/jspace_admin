import authSaga from "./auth/auth-saga";
import { all, fork } from "redux-saga/effects";
export default function* rootSaga(): any {
  yield all([fork(authSaga)]);
}
