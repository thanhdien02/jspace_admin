import React from "react";
import { useDispatch } from "react-redux";
import { Layout, Menu, theme } from "antd";
import LayoutAdminManagement from "../layout/LayoutAdminManagement";

const { Header, Content, Footer, Sider } = Layout;

const AdminDashBoard: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Header style={{ padding: 0, background: colorBgContainer }} />
      <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
        <div
          style={{
            padding: 24,
            textAlign: "center",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <p>long content</p>
          {}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </>
  );
};

export default AdminDashBoard;
