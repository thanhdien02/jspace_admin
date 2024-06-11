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

export const dataMonth: any = [
  {
    value: "1",
    label: "Tháng 1",
  },
  {
    value: "2",
    label: "Tháng 2",
  },
  {
    value: "3",
    label: "Tháng 3",
  },
  {
    value: "4",
    label: "Tháng 4",
  },
  {
    value: "5",
    label: "Tháng 5",
  },
  {
    value: "6",
    label: "Tháng 6",
  },
  {
    value: "7",
    label: "Tháng 7",
  },
  {
    value: "9",
    label: "Tháng 9",
  },
  {
    value: "10",
    label: "Tháng 10",
  },
  {
    value: "11",
    label: "Tháng 11",
  },
  {
    value: "12",
    label: "Tháng 12",
  },
];
export const dataYear: any = [
  {
    value: "2022",
    label: "Năm 2022",
  },
  {
    value: "2023",
    label: "Năm 2023",
  },
  {
    value: "2024",
    label: "Năm 2024",
  },
  {
    value: "2025",
    label: "Năm 2025",
  },
];
