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
