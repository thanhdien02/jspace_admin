import {
  DashboardOutlined,
  UserAddOutlined,
  BorderOuterOutlined,
  LogoutOutlined,
  SwapOutlined,
  BuildOutlined,
  SafetyCertificateOutlined,
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
    icon: React.createElement(BuildOutlined),
    path: "/admin/company",
  },
  {
    key: "5",
    label: "Approve Company",
    icon: React.createElement(SafetyCertificateOutlined),
    path: "/admin/approve-company",
  },
  {
    key: "6",
    label: "Change Password",
    icon: React.createElement(SwapOutlined),
    path: "/admin/change-password",
  },
  {
    key: "7",
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
