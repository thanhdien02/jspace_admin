import axios from "axios";
import { API } from "../../configs/configAPI";

export const requestUserGetAllUser = (page: string, accessToken: string) => {
  return axios.get(`${API}/api/v1/admins/users?size=10&page=${page}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
export const requestUserUpdateActiveUser = (
  dataUserUpdate: any,
  accessToken: string
) => {
  return axios.put(
    `${API}/api/v1/admins/users/update/activated`,
    {
      ...dataUserUpdate,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
