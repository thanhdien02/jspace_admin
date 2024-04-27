// import React, { useEffect, useRef, useState } from "react";

// import { SearchOutlined } from "@ant-design/icons";
// import type { InputRef, TableColumnsType, TableColumnType } from "antd";
// import {
//   Button,
//   Input,
//   Pagination,
//   Popconfirm,
//   Space,
//   Switch,
//   Table,
// } from "antd";
// import type { FilterDropdownProps } from "antd/es/table/interface";
// import Highlighter from "react-highlight-words";
// import { useDispatch, useSelector } from "react-redux";
// import { userGetAll, userUpdateUser } from "../store/user/user-slice";
// import { getToken } from "../utils/auth";
// import { dataTable, DataType } from "../utils/dataFetch";
// import { authFetchMe } from "../store/auth/auth-slice";

// type DataIndex = keyof DataType;

// const AdminManageUser: React.FC = () => {
//   const { users, loading } = useSelector((state: any) => state.user);
//   const dispatch = useDispatch();

//   const [searchText, setSearchText] = useState("");
//   const [searchedColumn, setSearchedColumn] = useState("");
//   const searchInput = useRef<InputRef>(null);

//   const handleSearch = (
//     selectedKeys: string[],
//     confirm: FilterDropdownProps["confirm"],
//     dataIndex: DataIndex
//   ) => {
//     confirm();
//     setSearchText(selectedKeys[0]);
//     setSearchedColumn(dataIndex);
//   };

//   const handleReset = (clearFilters: () => void) => {
//     clearFilters();
//     setSearchText("");
//   };

//   const getColumnSearchProps = (
//     dataIndex: DataIndex
//   ): TableColumnType<DataType> => ({
//     filterDropdown: ({
//       setSelectedKeys,
//       selectedKeys,
//       confirm,
//       clearFilters,
//       close,
//     }) => (
//       <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
//         <Input
//           ref={searchInput}
//           placeholder={`Search ${dataIndex}`}
//           value={selectedKeys[0]}
//           onChange={(e) =>
//             setSelectedKeys(e.target.value ? [e.target.value] : [])
//           }
//           onPressEnter={() =>
//             handleSearch(selectedKeys as string[], confirm, dataIndex)
//           }
//           style={{ marginBottom: 8, display: "block" }}
//         />
//         <Space>
//           <Button
//             type="primary"
//             onClick={() =>
//               handleSearch(selectedKeys as string[], confirm, dataIndex)
//             }
//             icon={<SearchOutlined />}
//             size="small"
//             style={{ width: 90 }}
//           >
//             Search
//           </Button>
//           <Button
//             onClick={() => clearFilters && handleReset(clearFilters)}
//             size="small"
//             style={{ width: 90 }}
//           >
//             Reset
//           </Button>
//           <Button
//             type="link"
//             size="small"
//             onClick={() => {
//               confirm({ closeDropdown: false });
//               setSearchText((selectedKeys as string[])[0]);
//               setSearchedColumn(dataIndex);
//             }}
//           >
//             Filter
//           </Button>
//           <Button
//             type="link"
//             size="small"
//             onClick={() => {
//               close();
//             }}
//           >
//             close
//           </Button>
//         </Space>
//       </div>
//     ),
//     filterIcon: (filtered: boolean) => (
//       <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
//     ),
//     onFilter: (value, record) =>
//       record[dataIndex]
//         .toString()
//         .toLowerCase()
//         .includes((value as string).toLowerCase()),
//     onFilterDropdownOpenChange: (visible) => {
//       if (visible) {
//         setTimeout(() => searchInput.current?.select(), 100);
//       }
//     },
//     render: (text) =>
//       searchedColumn === dataIndex ? (
//         <Highlighter
//           highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
//           searchWords={[searchText]}
//           autoEscape
//           textToHighlight={text ? text.toString() : ""}
//         />
//       ) : (
//         text
//       ),
//   });
//   const getColumnSearchPropsActived = (
//     dataIndex: DataIndex
//   ): TableColumnType<DataType> => ({
//     filterDropdown: ({
//       setSelectedKeys,
//       selectedKeys,
//       confirm,
//       clearFilters,
//       close,
//     }) => (
//       <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
//         <div className="flex flex-col gap-2">
//           <Space>
//             <Button
//               type="primary"
//               onClick={() => {
//                 setSelectedKeys(["True"]);
//                 handleSearch(selectedKeys as string[], confirm, dataIndex);
//               }}
//               size="small"
//               style={{ width: 90 }}
//             >
//               Actived
//             </Button>
//             <Button
//               onClick={() => {
//                 setSelectedKeys(["False"]);
//                 handleSearch(selectedKeys as string[], confirm, dataIndex);
//               }}
//               size="small"
//               className="hover:border-red-200"
//               color="red"
//               style={{ width: 90 }}
//             >
//               Block
//             </Button>
//           </Space>
//           <Space>
//             <Button
//               type="primary"
//               onClick={() => {
//                 clearFilters && handleReset(clearFilters);
//                 handleSearch(selectedKeys as string[], confirm, dataIndex);
//               }}
//               size="small"
//               style={{ width: 90 }}
//             >
//               Reset
//             </Button>
//             <Button
//               type="link"
//               size="small"
//               onClick={() => {
//                 close();
//               }}
//             >
//               close
//             </Button>
//           </Space>
//         </div>
//       </div>
//     ),
//     onFilter: (value, record) =>
//       record[dataIndex]
//         .toString()
//         .toLowerCase()
//         .includes((value as string).toLowerCase()),
//     onFilterDropdownOpenChange: (visible) => {
//       if (visible) {
//         setTimeout(() => searchInput.current?.select(), 100);
//       }
//     },
//   });

//   const columns: TableColumnsType<DataType> = [
//     {
//       title: "ID",
//       dataIndex: "key",
//       key: "key",
//       sortDirections: ["descend", "ascend"],
//       width: "10%",
//     },
//     {
//       title: "Name",
//       dataIndex: "name",
//       width: "20%",
//       ...getColumnSearchProps("name"),
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//       width: "30%",
//       sortDirections: ["descend", "ascend"],
//       ...getColumnSearchProps("email"),
//     },
//     {
//       title: "Role",
//       dataIndex: "role",
//       key: "role",
//       width: "15%",
//       ...getColumnSearchProps("role"),
//     },
//     {
//       title: "Activated",
//       dataIndex: "activated",
//       width: "15%",
//       ...getColumnSearchPropsActived("activated"),
//       render: (even, valueRecord) => (
//         <Popconfirm
//           title="Khóa tài khoản"
//           description="Bạn có chắc khóa tài khoản ?"
//           okText="Đồng ý"
//           cancelText="Không"
//           onConfirm={() => {
//             dispatch(
//               userUpdateUser({
//                 userId: valueRecord?.key,
//                 activated: !valueRecord?.activated,
//               })
//             );
//           }}
//           onCancel={() => {}}
//         >
//           <Switch checked={valueRecord?.activated} onChange={() => {}} />
//         </Popconfirm>
//       ),
//     },
//   ];
//   const { accessToken } = useSelector((state: any) => state.auth);
//   const [dataFirst, setDataFirst] = useState<any>([]);

//   useEffect(() => {
//     const dataFirst1 = users.map((item: any) => ({
//       key: item?.id,
//       name: item?.name,
//       email: item?.email,
//       role: item?.role?.code,
//       activated: item?.activated,
//     }));
//     setDataFirst(dataFirst1);
//   }, [users]);
//   useEffect(() => {
//     if (accessToken == "") {
//       dispatch(authFetchMe());
//     }
//     const token = getToken();
//     dispatch(userGetAll(token.accessToken));
//   }, []);
//   return (
//     <>
//       <Table
//         loading={loading}
//         className="m-5 "
//         columns={columns}
//         dataSource={dataTable}
//         rowClassName="hover:text-primary cursor-pointer"
//         // pagination={false}
//       />
//       {/* <div className="ml-auto pr-2">
//         <Pagination
//           defaultCurrent={1}
//           total={5}
//           onChange={(e) => console.log(e)}
//         />
//       </div> */}
//     </>
//   );
// };

// export default AdminManageUser;
