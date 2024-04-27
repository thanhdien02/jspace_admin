import {
  DashboardOutlined,
  UserAddOutlined,
  BorderOuterOutlined,
  HomeOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import React from "react";

export const dataSideBar = [
  {
    key: "1",
    label: "Dashboard",
    icon: React.createElement(DashboardOutlined),
    path: "/",
  },
  {
    key: "2",
    label: "Manage Users",
    icon: React.createElement(BorderOuterOutlined),
    path: "/admin/user",
  },
  {
    key: "3",
    label: "Add SubAdmin",
    icon: React.createElement(UserAddOutlined),
    path: "/admin/add-subadmin",
  },
  {
    key: "4",
    label: "Manage Company",
    icon: React.createElement(HomeOutlined),
    path: "/",
  },
  {
    key: "5",
    label: "Log out",
    icon: React.createElement(LogoutOutlined),
    path: "/login",
  },
];

export interface DataType {
  key: number;
  name: string;
  email: string;
  activated: boolean;
  role: string;
}

export const dataTable: DataType[] = [
  {
    key: 1,
    name: "dien",
    email: "dien@gmail.com",
    activated: true,
    role: "admin",
  },
];
