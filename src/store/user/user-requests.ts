import axios from "axios";
import { API } from "../../configs/configAPI";

export const requestGetAllUser = (accessToken: any) => {
  console.log("🚀 ~ requestGetAllUser ~ data:", accessToken);
  return axios.get(`${API}/api/v1/admins/users`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
