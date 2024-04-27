import axios from "axios";
import { API } from "../../configs/configAPI";

export const requestAuthRegisterForAdmin = (dataRegister: any) => {
  return axios.post(`${API}/`, {
    ...dataRegister,
  });
};
export const requestAuthLogin = (dataLogin: any) => {
  return axios.post(`${API}/api/v1/auth/admin/login`, {
    ...dataLogin,
  });
};
export const requestAuthLogOut = (accessToken: any) => {
  return axios.post(`${API}/api/v1/auth/logout`, {
    ...accessToken,
  });
};
export const requestAuthFetchMe = (accessToken: string) => {
  if (!accessToken) return;
  return axios.get(`${API}/api/v1/auth/admin/profile`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
