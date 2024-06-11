import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../components/table/Table";
import TableHeader from "../components/table/TableHeader";
import TableHeaderContent from "../components/table/TableHeaderContent";
import { Input, Pagination, Skeleton } from "antd";
import { debounce } from "ts-debounce";
import ContentManageCompanyPage from "../components/content/ContentManageCompanyPage";
import { companyGetCompany } from "../store/company/company-slice";
const { Search } = Input;
const AdminManageCompany: React.FC = () => {
  const { company, loadingCompany, paginationCompany } = useSelector(
    (state: any) => state.company
  );
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setPage(1);
    dispatch(companyGetCompany({ companyname: name, page: page, size: "2" }));
  }, [name]);
  const handleChangePage = (e: any) => {
    dispatch(companyGetCompany({ companyname: name, page: e, size: "2" }));
    setPage(e);
  };
  const handleSearchCompany = debounce((value: any) => {
    setName(value);
  }, 500);
  useEffect(() => {}, [page]);
  return (
    <>
      <div className="m-10 mt-5">
        <div className="mb-5 flex gap-4">
          <Search
            placeholder="Nhập tên công ty"
            enterButton="Tìm kiếm"
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
              {company?.length > 0 &&
                company?.map((item: any) => (
                  <ContentManageCompanyPage
                    key={item?.id}
                    item={item}
                  ></ContentManageCompanyPage>
                ))}
            </tbody>
          )}
        </Table>
        <div className="mt-4 flex justify-end">
          {company.length <= 0 ? (
            <></>
          ) : (
            <Pagination
              total={paginationCompany?.totalElements}
              onChange={(e) => handleChangePage(e)}
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
