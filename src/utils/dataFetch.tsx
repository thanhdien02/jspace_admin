import {
  DashboardOutlined,
  UserAddOutlined,
  BorderOuterOutlined,
  LogoutOutlined,
  SwapOutlined,
  BuildOutlined,
  SafetyCertificateOutlined,
  ShopOutlined,
  ProductOutlined,
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
    label: "Manage Products",
    icon: React.createElement(ShopOutlined),
    path: "/admin/manage-products",
  },
  {
    key: "7",
    label: "Change Password",
    icon: React.createElement(SwapOutlined),
    path: "/admin/change-password",
  },
  {
    key: "8",
    label: "Manage history product purchase",
    icon: React.createElement(ProductOutlined),
    path: "/admin/manage-history-product-purchase",
  },
  {
    key: "9",
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
export const dataHeaderManageProduct = [
  {
    title: "ID",
    className: "w-[100px]",
  },
  {
    title: "Tên dịch vụ",
    className: "w-[200px]",
  },
  {
    title: "Giá tiền",
    className: "w-[150px]",
  },
  {
    title: "Số lượng bài đăng",
    className: "w-[150px]",
  },
  {
    title: "Thời gian sử dụng",
    className: "w-[150px]",
  },
  {
    title: "Thời gian bài đăng",
    className: "w-[150px]",
  },
  {
    title: "Chỉnh sửa",
    className: "w-[150px]",
  },
];
export const dataHeaderManagePurchaseProduct = [
  {
    title: "ID",
    className: "w-[100px]",
  },
  {
    title: "Tên dịch vụ",
    className: "w-[200px]",
  },
  {
    title: "Tên công ty",
    className: "w-[200px]",
  },
  {
    title: "Giá tiền",
    className: "w-[150px]",
  },
  {
    title: "Thời gian mua",
    className: "w-[150px]",
  },
  {
    title: "Số lượng mua",
    className: "w-[150px]",
  },
  {
    title: "Tổng tiền",
    className: "w-[150px]",
  },
  {
    title: "PT thanh toán",
    className: "w-[150px]",
  },
];

export const dataDate: any = [
  {
    value: "1",
    label: "1 ngày",
  },
  {
    value: "2",
    label: "2 ngày",
  },
  {
    value: "3",
    label: "3 ngày",
  },
  {
    value: "4",
    label: "4 ngày",
  },
  {
    value: "5",
    label: "5 ngày",
  },
  {
    value: "6",
    label: "6 ngày",
  },
  {
    value: "7",
    label: "7 ngày",
  },
  {
    value: "9",
    label: "9 ngày",
  },
  {
    value: "10",
    label: "10 ngày",
  },
  {
    value: "11",
    label: "11 ngày",
  },
  {
    value: "12",
    label: "12 ngày",
  },
  {
    value: "13",
    label: "13 ngày",
  },
  {
    value: "14",
    label: "14 ngày",
  },
  {
    value: "15",
    label: "15 ngày",
  },
  {
    value: "16",
    label: "16 ngày",
  },
  {
    value: "17",
    label: "17 ngày",
  },
  {
    value: "18",
    label: "18 ngày",
  },
  {
    value: "19",
    label: "19 ngày",
  },
  {
    value: "20",
    label: "20 ngày",
  },
  {
    value: "21",
    label: "21 ngày",
  },
  {
    value: "22",
    label: "22 ngày",
  },
  {
    value: "23",
    label: "23 ngày",
  },
];
