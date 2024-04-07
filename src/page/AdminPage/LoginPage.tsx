import axios from "axios";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import React, { Fragment } from "react";
import LayoutAuthentication from "../../layout/LayoutAuthentication";
import { useDispatch } from "react-redux";
import { authLogin } from "../../store/auth/auth-slice";
import { Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons";

const LoginPage = () => {
  const dispatch = useDispatch();
  const login: any = useGoogleLogin({
    onSuccess: async (response: any) => {
      try {
        const dataEmail = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        dispatch(authLogin(dataEmail.data));
      } catch (error) {}
    },
  });

  return (
    <div className="bg-slate-400/15 flex fixed inset-0">
      <div className="m-auto ">
        <form
          action=""
          className=" p-6 rounded-lg my-5 bg-white min-h-[250px] min-w-[400px]  shadow-lg border-solid border border-slate-500/30"
          onSubmit={() => {}}
        >
          <h1 className="text-center mb-5 text-slate-800 font-bold text-2xl tracking-wider">
            JSPACE
          </h1>
          <div className="max-w-[400px] mb-5">
            <h4 className="mb-2 text-lg font-semibold">
              Bạn đã sẵn sàng thực hiện bước tiếp theo?
            </h4>
            <p className="font-normal text-xs text-slate-500">
              Bằng cách tạo tài khoản hoặc đăng nhập, bạn hiểu và đồng ý với
              Điều khoản. Bạn cũng xác nhận chính sách Cookie và Quyền riêng tư
              của Indeed. Bạn đồng ý nhận tin nhắn tiếp thị từ Indeed và có thể
              hủy bỏ việc nhận tin nhắn như vậy bằng cách mở liên kết hủy đăng
              ký trong tin nhắn của chúng tôi hoặc như được chỉ dẫn trong điều
              khoản của chúng tôi.
            </p>
          </div>
          <div className="flex">
            <Button
              type="primary"
              icon={<GoogleOutlined />}
              className="bg-blue-400 duration-300 m-auto min-w-[400px] flex gap-3 justify-center items-baseline"
              size={"large"}
              onClick={() => login()}
            >
              Đăng nhập với Google
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
