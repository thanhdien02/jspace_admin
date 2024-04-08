import React, { ReactNode } from "react";
import { Layout, Menu, theme } from "antd";
import { dataSideBar } from "../utils/dataFetch";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/logo3.png";

const { Sider } = Layout;
const LayoutAdminManagement: React.FC = () => {
  const navigate = useNavigate();
  const handleForwardSideBar = (e: any) => {
    const path: any = dataSideBar.find((item) => item.key === e.key);
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
        <Outlet></Outlet>
      </Layout>
    </Layout>
  );
};

export default LayoutAdminManagement;
