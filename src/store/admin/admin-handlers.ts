import { call, put } from "redux-saga/effects";
import {
  requestAdminCreateSubAdmin,
  requestAdminSendMailRequestConfirmCompanyAgain,
} from "./admin-requests";
import { getToken, Token } from "../../utils/auth";
import { adminUploadLoading, adminUploadMessageRedux } from "./admin-slice";
import { message } from "antd";

function* handleAdminCreateSubAdmin(dataCreateSubAdmin: any): Generator<any> {
  try {
    yield put(adminUploadLoading({ loading: true }));
    const token: Token = getToken();

    const response: any = yield call(
      requestAdminCreateSubAdmin,
      dataCreateSubAdmin.payload,
      token?.accessToken
    );
    console.log(response?.data?.code);
    if (response?.data?.code === 1000) {
      yield put(adminUploadMessageRedux({ messageAdmin: "success" }));
    } else {
      yield put(adminUploadMessageRedux({ messageAdmin: "fail" }));
    }
  } catch (error: any) {
    message.error(error?.response?.data?.message);
  } finally {
    yield put(adminUploadLoading({ loading: false }));
  }
}
function* handleAdminSendMailRequestConfirmCompanyAgain(
  dataAdminSendMailRequestConfirmCompanyAgain: any
): Generator<any> {
  try {
    yield put(adminUploadLoading({ loading: true }));
    const token: Token = getToken();
    const response: any = yield call(
      requestAdminSendMailRequestConfirmCompanyAgain,
      dataAdminSendMailRequestConfirmCompanyAgain?.payload?.companyId,
      token?.accessToken
    );
    console.log(response?.data?.code);
    if (response?.data?.code === 1000) {
      message?.success("Yêu cầu đã được gửi thành công.");
    }
  } catch (error) {
    message?.info("Gửi yêu cầu thất bại");
  } finally {
    yield put(adminUploadLoading({ loading: false }));
  }
}
export {
  handleAdminCreateSubAdmin,
  handleAdminSendMailRequestConfirmCompanyAgain,
};
