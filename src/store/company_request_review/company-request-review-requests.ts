import axios from "axios";
import { API } from "../../configs/configAPI";

export const requestCompanyRequestReviewGetCompanyRequestReview = (
  name: string = "",
  email: string = "",
  page: string = "1",
  accessToken: string,
  reviewed: string = ""
) => {
  return axios.get(
    `${API}/api/v1/admins/company-request-reviews?name=${name}&email=${email}&size=10&page=${page}&reviewed=${reviewed}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
export const requestCompanyRequestReviewUpdateCompanyRequestReview = (
  dataUpdateCompanyRequestReview?: any,
  accessToken?: string
) => {
  return axios.put(
    `${API}/api/v1/admins/company-request-reviews?companyId=${dataUpdateCompanyRequestReview?.id}&reviewed=${dataUpdateCompanyRequestReview?.reviewed}`,
    null,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
