import React from "react";
import logo from "../assets/logo3.png";
import { useNavigate } from "react-router-dom";
const AdminConfirmCreateSubAdmin: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex h-screen w-screen bg-blue-100/35">
      <div className="flex flex-col gap-10 p-10 items-center m-auto w-[450px] h-fit border border-solid border-gray-200 rounded-lg shadow-md">
          <div className="flex flex-col gap-2 items-center">
            <img src={logo} alt="" className="w-[50px]" />
            <h1 className="text-primary font-bold text-2xl">JSPACE</h1>
          </div>
          <div className="font-semibold text-xl">
            Tạo tài khoản SubAmin thành công.
          </div>
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-3 w-full font-semibold rounded-lg bg-primary text-white"
          >
            Quay lại trang quản lí
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminConfirmCreateSubAdmin;
