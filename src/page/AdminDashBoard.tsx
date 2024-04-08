import React from "react";
import { useDispatch } from "react-redux";
import { Layout, Menu, theme } from "antd";

const { Header, Content, Footer } = Layout;

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
          <p>Thong ke</p>
          {}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Design by ..</Footer>
    </>
  );
};

export default AdminDashBoard;
