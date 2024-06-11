import axios from "axios";
import { API } from "../../configs/configAPI";

export const requestDashboardGetDashboardUserMonth = (
  year: string,
  month: string,
  accessToken: string
) => {
  return axios.get(
    `${API}/api/v1/dashboards/admins/users/statistic-month?year=${year}&month=${month}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
export const requestDashboardGetDashboardUserYear = (
  year: string,
  accessToken: string
) => {
  return axios.get(
    `${API}/api/v1/dashboards/admins/users/statistic-year?year=${year}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
export const requestDashboardGetDashboardPostMonth = (
  year: string,
  month: string,
  accessToken: string
) => {
  return axios.get(
    `${API}/api/v1/dashboards/admins/posts/statistic-month?year=${year}&month=${month}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
export const requestDashboardGetDashboardPostYear = (
  year: string,
  accessToken: string
) => {
  return axios.get(
    `${API}/api/v1/dashboards/admins/posts/statistic-year?year=${year}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
export const requestDashboardGetDashboardCompanyMonth = (
  year: string,
  month: string,
  accessToken: string
) => {
  return axios.get(
    `${API}/api/v1/dashboards/admins/companies/statistic-month?year=${year}&month=${month}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
export const requestDashboardGetDashboardCompanyYear = (
  year: string,
  accessToken: string
) => {
  return axios.get(
    `${API}/api/v1/dashboards/admins/companies/statistic-year?year=${year}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
