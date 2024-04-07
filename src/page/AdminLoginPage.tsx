import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../store/auth/auth-slice";
import { NavLink, useNavigate } from "react-router-dom";

type Inputs = {
  email: string;
  password: string;
};

const AdminLoginPage = () => {
  const { user, accessToken } = useSelector((state: any) => state.auth);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const dispatch = useDispatch();

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
      <div className="flex flex-col h-[100vh] w-[100vw] bg-slate-700/10">
        <div className="m-auto min-w-[450px] min-h-[400px] bg-white shadow-md rounded-lg p-5">
          <h1 className="font-bold text-xl text-center mt-4">Đăng nhập</h1>
          <form
            autoComplete="off"
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 p-2"
          >
            <div className="">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Tài khoản
              </label>
              <div className="mt-2">
                <input
                  {...register("email", { required: true, maxLength: 40 })}
                  type="email"
                  autoComplete="email"
                  className="outline-none px-4 py-3 border border-stone-200 border-solid w-full rounded-md"
                />
              </div>
            </div>
            <div className=" mt-2">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Mật khẩu
              </label>
              <div className="mt-2">
                <input
                  {...register("password", { required: true, maxLength: 20 })}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  className="outline-none px-4 py-3 border border-stone-200 border-solid w-full rounded-md"
                />
              </div>
            </div>
            <div className="flex mt-2">
              <NavLink
                to={`/name`}
                className="hover:text-primary transition-all ml-auto hover:opacity-70"
              >
                <p className="text-base text-blue-500">Quên mật khẩu</p>
              </NavLink>
            </div>
            <button
              type="submit"
              className="bg-primary text-white px-8 py-4 rounded-md w-full mt-4 hover:opacity-80 duration-200"
            >
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLoginPage;
