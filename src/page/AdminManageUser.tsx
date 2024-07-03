import React, { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { userGetUsers, userUpdateUser } from "../store/user/user-slice";
import Table from "../components/table/Table";
import TableHeader from "../components/table/TableHeader";
import TableHeaderContent from "../components/table/TableHeaderContent";
import TableRowContent from "../components/table/TableRowContent";
import TableRow from "../components/table/TableRow";
import { Empty, Pagination, Popconfirm, Select, Skeleton, Switch } from "antd";
import { debounce } from "ts-debounce";
import InputSearch from "../components/input/InputSearch";

const options: any = [
  { value: "", label: "Tất cả tài khoản" },
  { value: "true", label: "Tài khoản đang mở" },
  { value: "false", label: "Tài khoản đang khóa" },
];
const optionsRole: any = [
  { value: "", label: "Tất cả" },
  { value: "4", label: "Ứng viên" },
  { value: "3", label: "Nhà tuyển dụng" },
  { value: "2", label: "Quản lí phụ" },
];
const AdminManageUser: React.FC = () => {
  const { users, paginationUser, loadingUser } = useSelector(
    (state: any) => state.user
  );
  const dispatch = useDispatch();
  const [nameSearch, setNameSearch] = useState("");
  const [activated, setActivated] = useState("");
  const [roleId, setRoleId] = useState("");
  const [page, setPage] = useState(1);

  const handleSearchName = debounce((value: any) => {
    setNameSearch(value);
    dispatch(
      userGetUsers({
        page: 1,
        name: value,
        activated: activated,
        roleId: roleId,
      })
    );
    setPage(1);
  }, 500);
  const handleChangeAccountStatus = (value: string) => {
    setActivated(value);
    dispatch(
      userGetUsers({
        page: 1,
        name: nameSearch,
        activated: value,
        roleId: roleId,
      })
    );
    setPage(1);
  };
  const handleChangePage = (e: any) => {
    dispatch(
      userGetUsers({
        page: e,
        name: nameSearch,
        activated: activated,
        roleId: roleId,
      })
    );
    setPage(e);
  };
  const handleChangeRoleId = (value: string) => {
    dispatch(
      userGetUsers({
        page: 1,
        name: nameSearch,
        activated: activated,
        roleId: value,
      })
    );
    setRoleId(value);
    setPage(1);
  };
  useEffect(() => {
    dispatch(userGetUsers({ page: page }));
  }, []);
  return (
    <>
      <div className="m-10 mt-5">
        <div className="mb-5 flex gap-4">
          <div className="relative">
            <InputSearch
              placeholder="Nhập tên tài khoản"
              onChange={(e: any) => {
                handleSearchName(e?.target?.value);
              }}
              className="pr-10 w-[280px]"
            ></InputSearch>
            <SearchOutlined className="absolute top-1/2 -translate-y-1/2 right-2 text-lg text-gray-700" />
          </div>

          <Select
            size={"large"}
            className="select-filter"
            allowClear
            placeholder="Trạng thái tài khoản"
            onChange={handleChangeAccountStatus}
            options={options}
          />
          <Select
            size={"large"}
            allowClear
            className="select-filter min-w-[150px]"
            placeholder="Quyền"
            onChange={handleChangeRoleId}
            options={optionsRole}
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
                  <TableRow className="even:bg-gray-300/50" key={item?.id}>
                    <TableRowContent className="">{item?.id}</TableRowContent>
                    <TableRowContent className="cursor-pointer hover:text-primary transition-all">
                      {item?.name}
                    </TableRowContent>
                    <TableRowContent className="">
                      <a href={`mailto:${item?.email}`} className="underline">
                        {item?.email}
                      </a>
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
              onChange={handleChangePage}
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
