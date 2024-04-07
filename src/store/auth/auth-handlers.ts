import { call, put } from "redux-saga/effects";
import { requestLogin } from "./auth-requests";
import { saveToken } from "../../utils/auth";
import { authUpdateUser } from "./auth-slice";

interface IAuthLogin {
  username: string;
  password: string;
}
function* handleAuthLogin(dataLogin: any) {
  try {
    const response: any = yield call(requestLogin, {
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
    // const response = yield call(requestAuthFetchMe, payload);
    // if (response.data.statusCode === 200) {
    //   yield put(
    //     authUpdateUser({
    //       user: response.data.data.user,
    //       accessToken: payload,
    //     })
    //   );
    // }
    yield put(
      authUpdateUser({
        user: { name: "thanhdien" },
        accessToken: accessToken,
      })
    );
  } catch (error) {
  } finally {
  }
}
export { handleAuthLogin, handleAuthFetchMe };
