import {
  AppstoreOutlined,
  UserAddOutlined,
  BorderOuterOutlined,
  LogoutOutlined,
  BuildOutlined,
  SafetyCertificateOutlined,
  ShopOutlined,
  ProductOutlined,
} from "@ant-design/icons";
import React from "react";

export const dataSideBar = [
  {
    key: "1",
    label: "Thống kê",
    icon: React.createElement(AppstoreOutlined),
    path: "/",
  },
  {
    key: "2",
    label: "Quản lí người dùng",
    icon: React.createElement(BorderOuterOutlined),
    path: "/admin/user",
  },
  {
    key: "3",
    label: "Thêm quản lí phụ",
    icon: React.createElement(UserAddOutlined),
    path: "/admin/add-subadmin",
  },
  {
    key: "4",
    label: "Quản lí công ty",
    icon: React.createElement(BuildOutlined),
    path: "/admin/company",
  },
  {
    key: "5",
    label: "Duyệt công ty",
    icon: React.createElement(SafetyCertificateOutlined),
    path: "/admin/approve-company",
  },
  {
    key: "6",
    label: "Quản lí sản phẩm",
    icon: React.createElement(ShopOutlined),
    path: "/admin/manage-products",
  },
  {
    key: "7",
    label: "Sản phẩm đã bán",
    icon: React.createElement(ProductOutlined),
    path: "/admin/manage-history-product-purchase",
  },
  {
    key: "8",
    label: "Đăng xuất",
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
    filter: false,
  },
  {
    title: "Tên dịch vụ",
    className: "w-[200px]",
    filter: false,
  },
  {
    title: "Giá tiền",
    className: "w-[150px]",
    filter: false,
  },
  {
    title: "Số lượng bài đăng",
    className: "w-[150px]",
    filter: false,
  },
  {
    title: "Thời gian sử dụng",
    className: "w-[150px]",
    filter: false,
  },
  {
    title: "Thời gian bài đăng",
    className: "w-[150px]",
    filter: false,
  },
  {
    title: "Chỉnh sửa",
    className: "w-[150px]",
    filter: false,
  },
];
export const dataHeaderManagePurchaseProduct = [
  {
    title: "ID",
    className: "w-[70px]",
    filter: false,
    name: "",
  },
  {
    title: "Tên dịch vụ",
    className: "w-[200px]",
    filter: false,
    name: "productName",
  },
  {
    title: "Tên công ty",
    className: "w-[250px]",
    filter: false,
    name: "name",
  },
  {
    title: "Giá tiền",
    className: "w-[100px]",
    filter: true,
    name: "productPrice",
  },
  {
    title: "Thời gian mua",
    className: "w-[200px]",
    filter: false,
    name: "",
  },
  {
    title: "Số lượng mua",
    className: "w-[100px]",
    filter: false,
    name: "quantity",
  },
  {
    title: "Tổng tiền",
    className: "w-[100px]",
    filter: true,
    name: "totalPrice",
  },
  {
    title: "PT thanh toán",
    className: "w-[100px]",
    filter: false,
    name: "",
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
