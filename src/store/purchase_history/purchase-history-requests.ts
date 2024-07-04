import axios from "axios";
import { API } from "../../configs/configAPI";

export const requestPurchaseHistotyGetPurchaseHistoty = (
  page: string = "1",
  size: string = "10",
  companyName: string = "",
  productName: string = "",
  sortProductPrice: string = "",
  sortTotalPrice: string = "",
  accessToken: string
) => {
  if (!accessToken) return;
  return axios.get(
    `${API}/api/v1/admins/purchase-histories?${
      sortProductPrice && `sort=productPrice,${sortProductPrice}&`
    }${
      sortTotalPrice && `sort=totalPrice,${sortTotalPrice}&`
    }companyName=${companyName}&productName=${productName}&page=${page}&size=${size}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
