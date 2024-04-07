import React, { ReactNode } from "react";
import { Layout, Menu, theme } from "antd";
import { dataSideBar } from "../utils/dataFetch";
import { Outlet, useNavigate } from "react-router-dom";
interface ParentProps {
  children: ReactNode; // ReactNode cho phép truyền bất kỳ thành phần React nào vào children
}
const { Header, Content, Footer, Sider } = Layout;
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
        <h4 className="p-4 font-bold text-xl tracking-wider text-center">
          SPACE
        </h4>
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["4"]}
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
