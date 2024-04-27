import { call, put } from "redux-saga/effects";
import {
  requestUserGetAllUser,
  requestUserUpdateActiveUser,
} from "./user-requests";
import {
  userUpdateLoadingRedux,
  userUpdatePaginaRedux,
  userUpdateUserRedux,
} from "./user-slice";
import { getToken } from "../../utils/auth";
import { message } from "antd";

function* handleUserGetAllUsers(dataGetUser: any): Generator<any> {
  try {
    yield put(userUpdateLoadingRedux({ loading: true }));
    const { accessToken } = getToken();
    const response: any = yield call(
      requestUserGetAllUser,
      dataGetUser?.payload?.page,
      accessToken
    );

    yield put(userUpdateUserRedux({ users: response.data.result.content }));
    yield put(userUpdatePaginaRedux({ pagina: response.data.result }));
  } catch (error) {
  } finally {
    yield put(userUpdateLoadingRedux({ loading: false }));
  }
}
function* handleUserUpdateActiveUser(dataUpdate: any): Generator<any> {
  try {
    yield put(userUpdateLoadingRedux({ loading: true }));
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
      requestUserGetAllUser,
      dataUpdate?.payload?.page,
      accessToken
    );
    console.log(
      "🚀 ~ function*handleUserUpdateActiveUser ~ response1:",
      response1
    );

    yield put(userUpdateUserRedux({ users: response1.data.result.content }));
  } catch (error) {
  } finally {
    yield put(userUpdateLoadingRedux({ loading: false }));
  }
}

export { handleUserGetAllUsers, handleUserUpdateActiveUser };
