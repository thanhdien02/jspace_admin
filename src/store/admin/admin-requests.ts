import axios from "axios";
import { API } from "../../configs/configAPI";

export const requestAdminCreateSubAdmin = (
  dataCreateSubAdmin: any,
  accessToken: string
) => {
  return axios.post(
    `${API}/api/v1/admins`,
    {
      ...dataCreateSubAdmin,
      returnUrl: "http://localhost:5173/admin/user  ",
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
