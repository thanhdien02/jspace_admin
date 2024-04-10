import { call, put } from "redux-saga/effects";
import { requestAdminCreateSubAdmin } from "./admin-requests";
import { getToken, Token } from "../../utils/auth";
import { adminUploadLoading } from "./admin-slice";

function* handleAdminCreateSubAdmin(dataCreateSubAdmin: any): Generator<any> {
  try {
    yield put(adminUploadLoading({ loading: true }));
    const token: Token = getToken();

    const response = yield call(
      requestAdminCreateSubAdmin,
      dataCreateSubAdmin.payload,
      token?.accessToken
    );
    console.log(response);
  } catch (error) {
  } finally {
    yield put(adminUploadLoading({ loading: false }));
  }
}
export { handleAdminCreateSubAdmin };
