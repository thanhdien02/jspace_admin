import { call, put } from "redux-saga/effects";
import {
  requestUserGetUser,
  requestUserUpdateActiveUser,
} from "./user-requests";
import {
  userUpdateLoadingRedux,
  userUpdatePaginaRedux,
  userUpdateUserRedux,
} from "./user-slice";
import { getToken } from "../../utils/auth";
import { message } from "antd";

function* handleUserGetUsers(dataGetUser: any): Generator<any> {
  console.log("🚀 ~ function*handleUserGetUsers ~ dataGetUser:", dataGetUser);
  try {
    yield put(userUpdateLoadingRedux({ loadingUser: true }));
    const { accessToken } = getToken();
    const response: any = yield call(
      requestUserGetUser,
      dataGetUser?.payload?.page,
      accessToken,
      dataGetUser?.payload?.name,
      dataGetUser?.payload?.activated
    );

    yield put(userUpdateUserRedux({ users: response.data.result.content }));
    yield put(userUpdatePaginaRedux({ paginationUser: response.data.result }));
  } catch (error) {
  } finally {
    yield put(userUpdateLoadingRedux({ loadingUser: false }));
  }
}
function* handleUserUpdateActiveUser(dataUpdate: any): Generator<any> {
  try {
    yield put(userUpdateLoadingRedux({ loadingUser: true }));
    const { accessToken } = getToken();
    const response: any = yield call(
      requestUserUpdateActiveUser,
      {
        userId: dataUpdate?.payload?.userId,
        activated: dataUpdate?.payload?.activated,
      },
      accessToken
    );
    console.log(response);
    if (response.data.code === 1000) {
      message.success("Cập nhật trạng thái thành công");
    }
    const response1: any = yield call(
      requestUserGetUser,
      dataUpdate?.payload?.page,
      accessToken
    );

    yield put(userUpdateUserRedux({ users: response1.data.result.content }));
  } catch (error) {
  } finally {
    yield put(userUpdateLoadingRedux({ loadingUser: false }));
  }
}

export { handleUserGetUsers, handleUserUpdateActiveUser };
