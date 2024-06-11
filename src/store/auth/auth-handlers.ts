import { call, put } from "redux-saga/effects";
import { getToken, logOut, saveToken } from "../../utils/auth";
import {
  authUpdateUserRedux,
  authUploadLoading,
  authUploadMessageRedux,
} from "./auth-slice";
import {
  requestAuthFetchMe,
  requestAuthLogin,
  requestAuthRefresh,
} from "./auth-requests";
import { message } from "antd";

function* handleAuthLogin(dataLogin: any): Generator<any> {
  try {
    yield put(authUploadLoading({ loading: true }));
    const response: any = yield call(requestAuthLogin, {
      username: dataLogin.payload.email,
      password: dataLogin.payload.password,
    });

    if (response.data.result.accessToken && response.data.result.refreshToken) {
      saveToken(
        response.data.result.accessToken,
        response.data.result.refreshToken
      );
      yield call(handleAuthFetchMe);
    }
  } catch (error: any) {
    // message.error("Tài khoản hoặc mật khẩu không chính xác.");
    message.error(error?.response?.data?.message);
  } finally {
    yield put(authUploadLoading({ loading: false }));
  }
}
function* handleAuthFetchMe(): Generator<any> {
  try {
    const { accessToken } = getToken();
    const response: any = yield call(requestAuthFetchMe, accessToken);
    if (response?.data?.code === 1000) {
      yield put(
        authUpdateUserRedux({
          users: response?.data?.result?.user,
          accessToken: accessToken,
        })
      );
    }
  } catch (error: any) {
    if (error?.response?.data?.message == "unauthenticated") {
      yield put(
        authUploadMessageRedux({ message: error?.response?.data?.message })
      );
    } else {
      yield call(handleAuthRefrestToken);
    }
  }
}
function* handleAuthLogout(): Generator<any> {
  try {
    logOut();
    yield put(
      authUpdateUserRedux({
        users: {},
        accessToken: "",
      })
    );
  } catch (error) {
  } finally {
  }
}
function* handleAuthRefrestToken(): Generator<any> {
  try {
    const { refreshToken } = getToken();
    const response: any = yield call(requestAuthRefresh, refreshToken);
    if (response?.data?.result) {
      saveToken(response?.data?.result?.accessToken, refreshToken);
      yield call(handleAuthFetchMe);
    } else {
      logOut();
    }
  } catch (error: any) {
    logOut();
    message.error(error?.response?.data?.message);
  }
}
export {
  handleAuthLogin,
  handleAuthFetchMe,
  handleAuthLogout,
  handleAuthRefrestToken,
};
