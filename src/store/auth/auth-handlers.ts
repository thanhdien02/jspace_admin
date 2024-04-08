import { call, put } from "redux-saga/effects";
import { saveToken } from "../../utils/auth";
import { authUpdateUser } from "./auth-slice";
import { requestAuthFetchMe, requestAuthLogin } from "./auth-requests";

interface IAuthLogin {
  username: string;
  password: string;
}
function* handleAuthLogin(dataLogin: any) {
  try {
    const response: any = yield call(requestAuthLogin, {
      username: dataLogin.payload.email,
      password: dataLogin.payload.password,
    });

    if (response.data.result.accessToken && response.data.result.refreshToken) {
      saveToken(
        response.data.result.accessToken,
        response.data.result.refreshToken
      );
      yield call(handleAuthFetchMe, response.data.result.accessToken);
    }
  } catch (error) {}
}
function* handleAuthFetchMe(accessToken: string) {
  try {
    const response = yield call(requestAuthFetchMe, accessToken);

    if (response.data.code === 1000) {
      yield put(
        authUpdateUser({
          user: response.data.result.user,
          accessToken: accessToken,
        })
      );
    }
  } catch (error) {
  } finally {
  }
}
export { handleAuthLogin, handleAuthFetchMe };
