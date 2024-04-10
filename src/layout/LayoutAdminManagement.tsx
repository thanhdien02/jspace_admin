import React from "react";
import { Layout, Menu } from "antd";
import { dataSideBar } from "../utils/dataFetch";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/logo3.png";
import AdminHeader from "../module/Admin/AdminHeader";
import { useDispatch } from "react-redux";
import { authLogout } from "../store/auth/auth-slice";

const { Sider } = Layout;
const LayoutAdminManagement: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleForwardSideBar = (e: any) => {
    const path: any = dataSideBar.find((item) => item.key === e.key);
    if (path.label === "Log out") {
      dispatch(authLogout());
    }
    navigate(path?.path);
  };
  return (
    <Layout hasSider>
      <Sider
        className=""
        style={{
          overflow: "auto",
          height: "100vh",
          width: "400px",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          backgroundColor: "white",
        }}
      >
        <h4 className="p-4 font-bold text-xl tracking-wider text-center flex items-center gap-4 text-primary cursor-pointer">
          <img src={logo} alt="" className="max-w-[45px]" />
          SPACE
        </h4>
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          // defaultSelectedKeys={["1"]}
          items={dataSideBar}
          onClick={handleForwardSideBar}
        />
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <AdminHeader></AdminHeader>
        <Outlet></Outlet>
      </Layout>
    </Layout>
  );
};

export default LayoutAdminManagement;
