import { takeLatest } from "redux-saga/effects";
import { userGetAll, userUpdateUser } from "./user-slice";
import {
  handleUserGetAllUsers,
  handleUserUpdateActiveUser,
} from "./user-handlers";

export default function* authSaga() {
  yield takeLatest(userGetAll.type, handleUserGetAllUsers);
  yield takeLatest(userUpdateUser.type, handleUserUpdateActiveUser);
}
