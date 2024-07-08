import axios from "axios";
import { API } from "../../configs/configAPI";

export const requestProductGetProduct = (
  page: string = "1",
  size: string = "10",
  name: string = ""
) => {
  return axios.get(
    `${API}/api/v1/products?name=${name}&page=${page}&size=${size}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
export const requestProductGetProductById = (product_id: string) => {
  return axios.get(`${API}/api/v1/products/${product_id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const requestProductCreateProduct = (
  dataCreateProduct: any,
  accessToken: string
) => {
  return axios.post(
    `${API}/api/v1/admins/products`,
    { ...dataCreateProduct },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
export const requestProductUpdateProduct = (
  product_id: string,
  dataUpdateProduct: any,
  accessToken: string
) => {
  return axios.patch(
    `${API}/api/v1/admins/products/${product_id}`,
    { ...dataUpdateProduct },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
export const requestProductDeteleProductById = (
  product_id: string,
  accessToken: string
) => {
  return axios.delete(`${API}/api/v1/admins/products/${product_id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
