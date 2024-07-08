import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";
import Table from "../components/table/Table";
import TableHeader from "../components/table/TableHeader";
import TableHeaderContent from "../components/table/TableHeaderContent";
import { Pagination, Select, Skeleton } from "antd";
import { debounce } from "ts-debounce";
import ContentManageCompanyPage from "../components/content/ContentManageCompanyPage";
import { companyGetCompany } from "../store/company/company-slice";
import InputSearch from "../components/input/InputSearch";
const options: any = [
  { value: "", label: "Tất cả công ty" },
  { value: "true", label: "Công ty đã được duyệt" },
  { value: "false", label: "Công ty chưa duyệt" },
];
const AdminManageCompany: React.FC = () => {
  const { company, loadingCompany, paginationCompany } = useSelector(
    (state: any) => state.company
  );
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [size] = useState(10);
  const [name, setName] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setPage(1);
    dispatch(companyGetCompany({ companyname: name, page: page, size: size }));
  }, [name]);
  const handleChangePage = (e: any) => {
    dispatch(companyGetCompany({ companyname: name, page: e, size: size }));
    setPage(e);
  };
  const handleSearchCompany = debounce((value: any) => {
    setName(value);
  }, 500);
  useEffect(() => {}, [page]);
  const handleChange = (value: string) => {
    console.log("🚀 ~ handleChange ~ value:", value);
    // dispatch(
    //   companyrequestreviewGetCompanyRequest({ page: page, reviewed: value })
    // );
    // setReviewed(value);
  };
  return (
    <>
      <div className="m-10 mt-5">
        <div className="mb-5 flex gap-4">
          <div className="relative">
            <InputSearch
              placeholder="Nhập tên công ty"
              onChange={(e: any) => {
                handleSearchCompany(e?.target?.value);
              }}
              className="pr-10 w-[280px]"
            ></InputSearch>
            <SearchOutlined className="absolute top-1/2 -translate-y-1/2 right-2 text-lg text-gray-700" />
          </div>

          <Select
            size={"large"}
            placeholder="Trạng thái công ty"
            onChange={handleChange}
            allowClear
            className="select-filter"
            options={options}
          />
        </div>
        <Table>
          <TableHeader>
            <TableHeaderContent
              title="ID"
              className="w-[5%]"
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
            {/* <TableHeaderContent
              title="Xác thực"
              className="w-[12%]"
            ></TableHeaderContent> */}
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
                    className="even:bg-gray-300/50"
                  ></ContentManageCompanyPage>
                ))}
            </tbody>
          )}
        </Table>
        <div className="mt-4 flex justify-end">
          {company.length > 0 && (
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
