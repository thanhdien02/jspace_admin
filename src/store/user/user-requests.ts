import axios from "axios";
import { API } from "../../configs/configAPI";

export const requestUserGetUser = (
  page: string,
  accessToken: string,
  name: string = "",
  activated: string = "",
  roleId: string = ""
) => {
  return axios.get(
    `${API}/api/v1/admins/users?size=10&page=${page}&name=${name}&activated=${activated}&roleId=${roleId}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
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
