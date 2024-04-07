import { call } from "redux-saga/effects";
import { requestGetAllUser } from "./user-requests";

function* handleGetAllUsers(accessToken: any) {
  console.log("🚀 ~ function*handleGetAllUsers ~ accessToken:", accessToken);
  try {
    const response: any = yield call(requestGetAllUser, accessToken?.payload);
    console.log("🚀 ~ function*handleGetAllUsers ~ response:", response);

    // if (response.data.result.accessToken && response.data.result.refreshToken) {
    //   saveToken(
    //     response.data.result.accessToken,
    //     response.data.result.refreshToken
    //   );
    //   yield call(handleAuthFetchMe, response.data.result.accessToken);
    // }
  } catch (error) {}
}

export { handleGetAllUsers };
