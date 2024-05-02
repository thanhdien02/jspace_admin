import { takeLatest } from "redux-saga/effects";
import { userGetUsers, userUpdateUser } from "./user-slice";
import {
  handleUserGetUsers,
  handleUserUpdateActiveUser,
} from "./user-handlers";

export default function* authSaga() {
  yield takeLatest(userGetUsers.type, handleUserGetUsers);
  yield takeLatest(userUpdateUser.type, handleUserUpdateActiveUser);
}
