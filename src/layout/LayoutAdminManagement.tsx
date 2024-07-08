import React, { useEffect } from "react";
import { Layout, Menu } from "antd";
import { dataSideBar } from "../utils/dataFetch";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/logo1.svg";
import AdminHeader from "../module/Admin/AdminHeader";
import { useDispatch, useSelector } from "react-redux";
import { authFetchMe, authLogout } from "../store/auth/auth-slice";
import Overlay from "../components/overlay/Overlay";
import { commonUpdateNotificationRedux } from "../store/common/common-slice";
import { getToken } from "../utils/auth";
const { Sider } = Layout;
const LayoutAdminManagement: React.FC = () => {
  const { accessToken, message, messageRefresh } = useSelector(
    (state: any) => state.auth
  );
  const { notificationCheck } = useSelector((state: any) => state.common);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleForwardSideBar = (e: any) => {
    const path: any = dataSideBar.find((item) => item.key === e.key);
    if (path.label === "Đăng xuất") {
      dispatch(authLogout());
    }
    navigate(path?.path);
  };
  useEffect(() => {
    if (accessToken == "") {
      const token = getToken();
      if (token?.accessToken == "null" || message == "unauthenticated") {
        navigate("/login");
      } else dispatch(authFetchMe());
    }
  }, [message, accessToken]);
  useEffect(() => {
    if (messageRefresh) {
      dispatch(authLogout());
    }
  }, [messageRefresh]);
  return (
    <Layout hasSider>
      <Sider
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
          <img src={logo} alt="" className="w-[124px]" />
        </h4>
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          items={dataSideBar}
          onClick={handleForwardSideBar}
        />
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <AdminHeader></AdminHeader>
        <Outlet></Outlet>
      </Layout>

      {notificationCheck && (
        <div
          onClick={() => {
            dispatch(
              commonUpdateNotificationRedux({ notificationCheck: false })
            );
          }}
        >
          <Overlay></Overlay>
        </div>
      )}
    </Layout>
  );
};

export default LayoutAdminManagement;
