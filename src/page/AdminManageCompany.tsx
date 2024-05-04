import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Table from "../components/table/Table";
import TableHeader from "../components/table/TableHeader";
import TableHeaderContent from "../components/table/TableHeaderContent";
import TableRowContent from "../components/table/TableRowContent";
import TableRow from "../components/table/TableRow";
import { Empty, Input, Pagination, Popconfirm, Skeleton, Switch } from "antd";
import { debounce } from "ts-debounce";
// import { companyGetCompany } from "../store/company/company-slice";
const { Search } = Input;
const AdminManageCompany: React.FC = () => {
  // const handleChange = (value: string | string[]) => {
  //   console.log(`Selected: ${value}`);
  // };
  const { company, loadingCompany, paginationCompany } = useSelector(
    (state: any) => state.company
  );
  const [page, setPage] = useState(1);
  // const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSearchCompany = debounce((value: any) => {
    setPage(1);
    console.log(value);
    // dispatch(companyGetCompany({ companyname: value }));
  }, 500);

  useEffect(() => {
    // dispatch(companyGetCompany({ page: page }));
  }, [page]);
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
          {/* <Select
            size={"large"}
            defaultValue="Active"
            onChange={handleChange}
            style={{ width: 200 }}
            options={options}
          /> */}
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
              {company.length <= 0 ? (
                <tr>
                  <td className="p-5 text-center " colSpan={6}>
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                  </td>
                </tr>
              ) : (
                company.length > 0 &&
                company.map((item: any) => (
                  <TableRow className="" key={item?.company?.id}>
                    <TableRowContent className="">
                      {item?.company?.id}
                    </TableRowContent>
                    <TableRowContent className="">
                      {item?.company?.name}
                    </TableRowContent>
                    <TableRowContent className="">
                      {item?.company?.email}
                    </TableRowContent>

                    <TableRowContent className="">
                      {item?.company?.phone}
                    </TableRowContent>
                    <TableRowContent className="">
                      {item?.company?.companyLink}
                    </TableRowContent>
                    <TableRowContent className="">
                      <Switch checked={item?.company?.emailVerified} />
                    </TableRowContent>
                    <TableRowContent className="">
                      <Popconfirm
                        title="Khóa tài khoản"
                        description="Bạn có chắc khóa tài khoản ?"
                        okText="Đồng ý"
                        cancelText="Không"
                        // onConfirm={() => {
                        //   dispatch(
                        //     companyrequestreviewUpdateCompanyRequest({
                        //       id: item?.company?.id,
                        //       reviewed: !item?.reviewed,
                        //       page: page,
                        //     })
                        //   );
                        // }}
                        onCancel={() => {}}
                      >
                        <Switch checked={item?.reviewed} onChange={() => {}} />
                      </Popconfirm>
                    </TableRowContent>
                  </TableRow>
                ))
              )}
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
