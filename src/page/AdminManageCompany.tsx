import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Table from "../components/table/Table";
import TableHeader from "../components/table/TableHeader";
import TableHeaderContent from "../components/table/TableHeaderContent";
import TableRowContent from "../components/table/TableRowContent";
import TableRow from "../components/table/TableRow";
import { Input, Pagination, Popconfirm, Skeleton, Switch } from "antd";
import { debounce } from "ts-debounce";
const { Search } = Input;
const AdminManageCompany: React.FC = () => {
  const { company, loadingCompany, paginationCompany } = useSelector(
    (state: any) => state.company
  );
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSearchCompany = debounce((value: any) => {
    setPage(1);
    console.log(value);
  }, 500);

  useEffect(() => {}, [page]);
  return (
    <>
      <div className="m-10 mt-5">
        <div className="mb-5 flex gap-4">
          <Search
            placeholder="Nhập tên công ty"
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
        </div>

        <Table>
          <TableHeader>
            <TableHeaderContent
              title="ID"
              className="w-[10%]"
            ></TableHeaderContent>
            <TableHeaderContent
              title="Tên công ty"
              className="w-[20%]"
            ></TableHeaderContent>
            <TableHeaderContent
              title="Email"
              className="w-[20%]"
            ></TableHeaderContent>
            <TableHeaderContent
              title="Số điện thoại"
              className="w-[15%]"
            ></TableHeaderContent>
            <TableHeaderContent
              title="Link website"
              className="w-[13%]"
            ></TableHeaderContent>
            <TableHeaderContent
              title="Khóa"
              className="w-[12%]"
            ></TableHeaderContent>
          </TableHeader>
          {loadingCompany ? (
            <tbody className="">
              <tr>
                <td className="p-5 text-center" colSpan={7}>
                  <Skeleton active />
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              <TableRow className="">
                <TableRowContent className="">1</TableRowContent>
                <TableRowContent className="">Cong ty FPT</TableRowContent>
                <TableRowContent className="">join@gmail.com</TableRowContent>
                <TableRowContent className="">0787871212</TableRowContent>
                <TableRowContent className="">hadmasdasdasd</TableRowContent>
                <TableRowContent className="">
                  <Popconfirm
                    title="Khóa tài khoản"
                    description="Bạn có chắc khóa tài khoản ?"
                    okText="Đồng ý"
                    cancelText="Không"
                    onCancel={() => {}}
                  >
                    <Switch checked={true} onChange={() => {}} />
                  </Popconfirm>
                </TableRowContent>
              </TableRow>
            </tbody>
          )}
        </Table>
        <div className="mt-4 flex justify-end">
          {company.length <= 0 ? (
            <></>
          ) : (
            <Pagination
              total={paginationCompany?.totalElements}
              onChange={(e) => setPage(e)}
              className="inline-block"
              current={page}
              pageSize={paginationCompany?.pageSize}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AdminManageCompany;
