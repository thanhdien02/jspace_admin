import { Avatar } from "antd";
import React from "react";
import { UserOutlined, CaretDownOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
const AdminHeader: React.FC = () => {
  const { user } = useSelector((state: any) => state.auth);
  return (
    <header className="flex px-6 py-4 justify-between items-center bg-white">
      <div className="">
        <p className="text-primary">Hi {user?.username}</p>
        <h1 className="text-primary font-bold text-2xl">
          Welcom to ADMIN DASHBOARD!
        </h1>
      </div>
      <div className="flex gap-3 items-start cursor-pointer px-4 py-2 hover:bg-primary rounded-lg transition-all hover:text-white">
        <Avatar
          style={{ backgroundColor: "#87d068" }}
          icon={<UserOutlined />}
          className="self-center"
        />
        <div className="">
          <p className="font-semibold text-sm">{user?.username}</p>
          <p className="text-xs">{user?.role}</p>
        </div>
        <CaretDownOutlined className="self-auto" />
      </div>
    </header>
  );
};

export default AdminHeader;
