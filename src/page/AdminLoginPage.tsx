import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../store/auth/auth-slice";
import { NavLink, useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import logo from "../assets/logo3.png";
import bglogin from "../assets/bg-login.jpg";
import Input from "../components/input";
import IconKey from "../components/icons/IconKey";
import { Checkbox } from "antd";
type Inputs = {
  email: string;
  password: string;
};

const AdminLoginPage: React.FC = () => {
  const { accessToken, loading } = useSelector((state: any) => state.auth);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();
  const dispatch = useDispatch();
  const [showpassword, setShowpassword] = useState(false);
  const onSubmit: SubmitHandler<Inputs> = (dataLogin: Inputs) => {
    console.log("🚀 ~ AdminLoginPage ~ data:", dataLogin);
    dispatch(authLogin(dataLogin));
  };
  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken]);
  return (
    <>
      <div className="relative flex flex-col h-[100vh] w-[100vw] bg-cover">
        <img
          src={bglogin}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="m-auto min-w-[450px] min-h-[400px] bg-white shadow-md rounded-lg p-5 z-10">
          <div className="flex">
            <img src={logo} alt="" className="w-[50px] h-[50px] mx-auto mt-3" />
          </div>
          <h1 className="font-bold text-xl text-center mt-2 text-primary">
            Đăng nhập với JSPACE
          </h1>
          <form
            autoComplete="off"
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 p-2"
          >
            <div className="">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Tài khoản
              </label>
              <div className="mt-2 relative">
                <UserOutlined
                  style={{
                    fontSize: "20px",
                    color: "rgb(156 163 175)",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    transform: "translate(60%, 60%)",
                  }}
                />
                <input
                  {...register("email", {
                    required: true,
                    maxLength: 40,
                    minLength: 5,
                  })}
                  // type="email"
                  placeholder="Tài khoản"
                  autoComplete="off"
                  className="focus:border-solid h-full focus:border-stone-400/70 transition-all outline-none pr-4 pl-12 py-3 border border-stone-200 border-solid w-full rounded-md"
                />
                <p className="text-red-500 py-2">
                  {" "}
                  {errors?.email?.type === "required"
                    ? "*Bạn chưa điền tài khoản."
                    : errors?.email?.type === "maxLength"
                    ? "*Tài khoản không được quá 40 ký tự"
                    : errors?.email?.type === "minLength"
                    ? "*Tài khoản không được ít hơn 5 ký tự"
                    : ""}
                </p>
              </div>
            </div>
            <div className=" mt-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mật khẩu
              </label>
              <div className="mt-2 relative">
                <IconKey className="absolute top-0 left-0 translate-x-[50%] text-gray-400 translate-y-[50%]"></IconKey>
                <input
                  {...register("password", {
                    required: true,
                    maxLength: 40,
                    minLength: 8,
                  })}
                  placeholder="Mật khẩu"
                  id="password"
                  name="password"
                  type={showpassword ? "text" : "password"}
                  autoComplete="password"
                  className="h-full focus:border-solid focus:border-stone-400/70 transition-all outline-none pr-4 pl-12 py-3 border border-stone-200 border-solid w-full rounded-md"
                />
                <p className="text-red-500 py-2">
                  {" "}
                  {errors?.password?.type === "required"
                    ? "*Bạn chưa điền mật khẩu."
                    : errors?.password?.type === "maxLength"
                    ? "*Mật khẩu không được quá 40 ký tự"
                    : errors?.password?.type === "minLength"
                    ? "*Mật khẩu không được ít hơn 8 ký tự"
                    : ""}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Checkbox
                onChange={() => {
                  setShowpassword(!showpassword);
                }}
              >
                Hiện mật khẩu
              </Checkbox>
              <NavLink
                to={`/name`}
                className="hover:text-primary transition-all ml-auto hover:opacity-70 "
              >
                <p className="text-base text-primary">Quên mật khẩu ?</p>
              </NavLink>
            </div>

            <Input
              className="mt-6"
              loading={loading}
              title="Đăng nhập"
              classButton="w-full"
            ></Input>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLoginPage;
