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
export const requestAdminSendMailRequestConfirmCompanyAgain = (
  companyId: any,
  accessToken: string
) => {
  return axios.post(
    `${API}/api/v1/admins/companies/${companyId}/request-verify-info`,
    {},
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
