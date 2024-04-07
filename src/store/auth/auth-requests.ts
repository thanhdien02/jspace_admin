import axios from "axios";
import { API } from "../../configs/configAPI";

export const requestAuthRegisterCompany = (data: any) => {
  return axios.post(`${API}/`, {
    ...data,
  });
};
export const requestAuthGoogle = (data: any) => {
  return axios.post(`${API}/api/v1/auth/users/login`, {
    ...data,
  });
};
export const requestLogin = (data: any) => {
  console.log("🚀 ~ requestLogin ~ data:", data);
  return axios.post(`${API}/api/v1/auth/admin/login`, {
    ...data,
  });
};
export const requestAuthFetchMe = (token: string) => {
  if (!token) return;
  return axios.get(`${API}/api/v1/admins/profile`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
