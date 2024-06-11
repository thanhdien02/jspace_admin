import React from "react";
import "chart.js/auto";
import HeaderContentManage from "../components/header/HeaderContentManage";
import BarChartUser from "../module/dashboard/BarChartUser";
import LineChartPost from "../module/dashboard/LineChartPost";

const AdminDashBoard: React.FC = () => {
  return (
    <div className="px-20 py-5">
      <HeaderContentManage title="Thống kê"></HeaderContentManage>
      <div className="flex gap-5">
        <div className="w-[580px] h-[400px] bg-white p-5 shadow-md rounded-md">
          <BarChartUser></BarChartUser>
          <p>Số lượng người dùng</p>
        </div>
        <div className="w-[580px] h-[400px] bg-white p-5 shadow-md rounded-md">
          <LineChartPost></LineChartPost>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
