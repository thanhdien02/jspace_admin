import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { userGetUsers, userUpdateUser } from "../store/user/user-slice";
import Table from "../components/table/Table";
import TableHeader from "../components/table/TableHeader";
import TableHeaderContent from "../components/table/TableHeaderContent";
import TableRowContent from "../components/table/TableRowContent";
import TableRow from "../components/table/TableRow";
import {
  Empty,
  Input,
  Pagination,
  Popconfirm,
  Select,
  Skeleton,
  Switch,
} from "antd";
import { debounce } from "ts-debounce";
const { Search } = Input;

const options: any = [
  { value: "", label: "All" },
  { value: "true", label: "Active" },
  { value: "false", label: "Block" },
];
const AdminManageUser: React.FC = () => {
  const { users, paginationUser, loadingUser } = useSelector(
    (state: any) => state.user
  );
  const dispatch = useDispatch();
  const [nameSearch, setNameSearch] = useState("");
  const [activated, setActivated] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(userGetUsers({ page: page }));
  }, [page]);
  const handleSearchCompany = debounce((value: any) => {
    setNameSearch(value);
    dispatch(userGetUsers({ page: page, name: value, activated: activated }));
  }, 500);
  const handleChange = (value: string) => {
    console.log(`Selected: ${value}`);
    setActivated(value);
    dispatch(userGetUsers({ page: page, name: nameSearch, activated: value }));
  };
  return (
    <>
      <div className="m-10 mt-5">
        <div className="mb-5 flex gap-4">
          <Search
            placeholder="Nhập tên tài khoản"
            enterButton="Search"
            size="large"
            onSearch={(e) => console.log(e)}
            onInput={(e: any) => {
              handleSearchCompany(e?.target?.value);
            }}
            className="w-[30%]"
            loading={false}
            allowClear
          />
          <Select
            size={"large"}
            defaultValue="Active"
            onChange={handleChange}
            style={{ width: 200 }}
            options={options}
          />
        </div>

        <Table>
          <TableHeader>
            <TableHeaderContent
              title="ID"
              className="w-[10%]"
            ></TableHeaderContent>
            <TableHeaderContent
              title="Tên"
              className="w-[25%]"
            ></TableHeaderContent>
            <TableHeaderContent
              title="Email"
              className="w-[25%]"
            ></TableHeaderContent>
            <TableHeaderContent
              title="Quyền"
              className="w-[15%]"
            ></TableHeaderContent>
            <TableHeaderContent
              title="Tình trạng tài khoản"
              className="w-[15%]"
            ></TableHeaderContent>
          </TableHeader>
          {loadingUser ? (
            <tbody className="">
              <tr>
                <td className="p-5 text-center" colSpan={5}>
                  <Skeleton active />
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {users.length <= 0 ? (
                <tr>
                  <td className="p-5 text-center " colSpan={5}>
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                  </td>
                </tr>
              ) : (
                users.length > 0 &&
                users.map((item: any) => (
                  <TableRow  className="even:bg-gray-300/50" key={item?.id}>
                    <TableRowContent className="">{item?.id}</TableRowContent>
                    <TableRowContent className="">{item?.name}</TableRowContent>
                    <TableRowContent className="">
                      {item?.email}
                    </TableRowContent>
                    <TableRowContent className="">
                      {item?.role?.code}
                    </TableRowContent>
                    <TableRowContent className="">
                      <Popconfirm
                        title="Khóa tài khoản"
                        description="Bạn có chắc khóa tài khoản ?"
                        okText="Đồng ý"
                        cancelText="Không"
                        onConfirm={() => {
                          dispatch(
                            userUpdateUser({
                              userId: item?.id,
                              activated: !item?.activated,
                              page: page,
                            })
                          );
                        }}
                        onCancel={() => {}}
                      >
                        <Switch checked={item?.activated} onChange={() => {}} />
                      </Popconfirm>
                    </TableRowContent>
                  </TableRow>
                ))
              )}
            </tbody>
          )}
        </Table>
        <div className="mt-4 flex justify-end">
          {users.length <= 0 ? (
            <></>
          ) : (
            <Pagination
              total={paginationUser?.totalElements}
              onChange={(e) => setPage(e)}
              className="inline-block"
              current={page}
              pageSize={paginationUser?.pageSize}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AdminManageUser;
