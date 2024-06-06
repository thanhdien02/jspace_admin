import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authFetchMe } from "../store/auth/auth-slice";
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
  Popover,
  Select,
  Skeleton,
  Switch,
} from "antd";
import { debounce } from "ts-debounce";
import {
  companyrequestreviewGetCompanyRequest,
  companyrequestreviewUpdateCompanyRequest,
} from "../store/company_request_review/company-request-review-slice";
import TitleContent from "../components/title/TitleContent";
const { Search } = Input;

const options: any = [
  { value: "", label: "Tất cả" },
  { value: "true", label: "Duyệt" },
  { value: "false", label: "Chưa duyệt" },
];
const AdminManageApproveApplicationCompany: React.FC = () => {
  const { accessToken } = useSelector((state: any) => state.user);
  const {
    companyrequestreview,
    paginationCompanyRequestReview,
    loadingCompanyRequestReview,
  } = useSelector((state: any) => state.companyrequestreview);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [reviewed, setReviewed] = useState("");
  useEffect(() => {
    if (accessToken == "") {
      dispatch(authFetchMe());
    }
    dispatch(
      companyrequestreviewGetCompanyRequest({ page: page, reviewed: reviewed })
    );
  }, [page]);
  const handleSearchCompany = debounce((value: any) => {
    console.log("Input value:", value);
  }, 500);
  useEffect(() => {}, [companyrequestreview]);

  const handleChange = (value: string) => {
    dispatch(
      companyrequestreviewGetCompanyRequest({ page: page, reviewed: value })
    );
    setReviewed(value);
  };
  return (
    <>
      <div className="m-10 mt-5">
        <TitleContent>Danh sách công ty muốn đăng ký</TitleContent>
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
          <Select
            size={"large"}
            defaultValue="Tất cả"
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
              title="Xác nhận email"
              className="w-[12%]"
            ></TableHeaderContent>
            <TableHeaderContent
              title="Duyệt"
              className="w-[10%]"
            ></TableHeaderContent>
          </TableHeader>
          {loadingCompanyRequestReview ? (
            <tbody className="">
              <tr>
                <td className="p-5 text-center" colSpan={7}>
                  <Skeleton active />
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {companyrequestreview.length <= 0 ? (
                <tr>
                  <td className="p-5 text-center " colSpan={7}>
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                  </td>
                </tr>
              ) : (
                companyrequestreview.length > 0 &&
                companyrequestreview.map((item: any) => (
                  <TableRow  className="even:bg-gray-300/50" key={item?.company?.id}>
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
                      <div className="flex gap-2 items-center">
                        <Switch checked={item?.company?.emailVerified} />
                        <Popover
                          content={
                            <p className="max-w-[150px] font-medium">
                              Gửi lại email xác nhận đến công ty
                            </p>
                          }
                        >
                          <span className="cursor-pointer text-nowrap py-1 px-2 rounded-md bg-primary text-white">
                            Gửi lại
                          </span>
                        </Popover>
                      </div>
                    </TableRowContent>
                    <TableRowContent className="">
                      <Popconfirm
                        title="Khóa tài khoản"
                        description="Bạn có chắc khóa tài khoản ?"
                        okText="Đồng ý"
                        cancelText="Không"
                        onConfirm={() => {
                          dispatch(
                            companyrequestreviewUpdateCompanyRequest({
                              id: item?.company?.id,
                              reviewed: !item?.reviewed,
                              page: page,
                            })
                          );
                        }}
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
          {companyrequestreview.length <= 0 ? (
            <></>
          ) : (
            <Pagination
              total={paginationCompanyRequestReview?.totalElements}
              onChange={(e) => setPage(e)}
              className="inline-block"
              current={page}
              pageSize={paginationCompanyRequestReview?.pageSize}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AdminManageApproveApplicationCompany;
