import { call, put } from "redux-saga/effects";
import { requestGetAllUser } from "./user-requests";
import { userUpdateData } from "./user-slice";

function* handleGetAllUsers(accessToken: any) {
  console.log("🚀 ~ function*handleGetAllUsers ~ accessToken:", accessToken);
  try {
    const response: any = yield call(requestGetAllUser, accessToken?.payload);

    yield put(userUpdateData(response.data.result.content));
  } catch (error) {}
}

export { handleGetAllUsers };
