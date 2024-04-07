import authSaga from "./auth/auth-saga";
import userSaga from "./user/user-saga";
import { all, fork } from "redux-saga/effects";
export default function* rootSaga(): any {
  yield all([fork(authSaga)]);
  yield all([fork(userSaga)]);
}
