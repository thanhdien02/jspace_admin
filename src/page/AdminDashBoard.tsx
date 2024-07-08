import React, { useEffect } from "react";
import "chart.js/auto";
import HeaderContentManage from "../components/header/HeaderContentManage";
import BarChartUser from "../module/dashboard/BarChartUser";
import LineChartPost from "../module/dashboard/LineChartPost";
import { PiMoney } from "react-icons/pi";
import { LuUsers } from "react-icons/lu";
import { BsBuilding } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { dashboardGetDashboardNumberAll } from "../store/dashboard/dashboard-slice";

const AdminDashBoard: React.FC = () => {
  const { dashboardNumberAll } = useSelector((state: any) => state.dashboard);
  const { accessToken } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (accessToken) {
      dispatch(dashboardGetDashboardNumberAll());
    }
  }, [accessToken]);
  return (
    <div className="px-16 py-5 min-h-screen bg-slate-300/30">
      <HeaderContentManage
        title="Thống kê"
        className="!text-2xl"
      ></HeaderContentManage>
      <div className="grid grid-cols-5 gap-5">
        <div className="flex justify-between rounded-md bg-white px-5 py-8 shadow">
          <div>
            <h3 className="font-medium text-gray-500">Danh thu sản phẩm</h3>
            <strong className="mt-3 inline-block text-black font-bold text-xl">
              {dashboardNumberAll?.total_revenue}$
            </strong>
          </div>
          <span className="px-2 py-1 rounded bg-green-500 flex justify-center items-center self-start ">
            <PiMoney className="text-base text-white" />
          </span>
        </div>
        <div className="flex justify-between rounded-md bg-white px-5 py-8 shadow">
          <div>
            <h3 className="font-medium text-gray-500">Số lượng người dùng</h3>
            <strong className="mt-3 inline-block text-black font-bold text-xl">
              {dashboardNumberAll?.user_number}
            </strong>
          </div>
          <span className="px-2 py-1 rounded bg-pink-500 flex justify-center items-center self-start ">
            <LuUsers className="text-base text-white" />
          </span>
        </div>
        <div className="flex justify-between rounded-md bg-white px-5 py-8 shadow">
          <div>
            <h3 className="font-medium text-gray-500">Số lượng công ty</h3>
            <strong className="mt-3 inline-block text-black font-bold text-xl">
              {dashboardNumberAll?.company_number}
            </strong>
          </div>
          <span className="px-2 py-1 rounded bg-blue-600 flex justify-center items-center self-start ">
            <BsBuilding className="text-base text-white" />
          </span>
        </div>
        <div className="flex justify-between rounded-md bg-white px-5 py-8 shadow">
          <div>
            <h3 className="font-medium text-gray-500">Số lượng sản phẩm</h3>
            <strong className="mt-3 inline-block text-black font-bold text-xl">
              {dashboardNumberAll?.product_number}
            </strong>
          </div>
          <span className="px-2 py-1 rounded bg-yellow-500 flex justify-center items-center self-start ">
            <IoNewspaperOutline className="text-base text-white" />
          </span>
        </div>
        <div className="flex justify-between rounded-md bg-white px-5 py-8 shadow">
          <div>
            <h3 className="font-medium text-gray-500">Số lượng bài đăng</h3>
            <strong className="mt-3 inline-block text-black font-bold text-xl">
              {dashboardNumberAll?.post_number}
            </strong>
          </div>
          <span className="px-2 py-1 rounded bg-yellow-500 flex justify-center items-center self-start ">
            <IoNewspaperOutline className="text-base text-white" />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <div className=" h-[400px] bg-white p-5 shadow-md rounded-md">
          <BarChartUser></BarChartUser>
          <p className="text-base font-medium text-gray-600">
            Số lượng người dùng & công ty
          </p>
        </div>
        <div className=" h-[400px] bg-white p-5 shadow-md rounded-md">
          <LineChartPost></LineChartPost>
          <p className="text-base font-medium text-gray-600">
            Số lượng bài đăng
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
