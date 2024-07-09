import axios from "axios";
import { API } from "../../configs/configAPI";

export const requestUserGetUser = (
  page: string,
  accessToken: string,
  name: string = "",
  email: string = "",
  activated: string = "",
  roleId: string = "",
  size: string = "10"
) => {
  return axios.get(
    `${API}/api/v1/admins/users?size=${size}&page=${page}&email=${email}&name=${name}&activated=${activated}&roleId=${roleId}`,
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
