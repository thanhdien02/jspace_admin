import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Table from "../components/table/Table";
import { Input, Pagination, Radio, RadioChangeEvent } from "antd";
import { debounce } from "ts-debounce";
import HeaderTableManage from "../components/header/HeaderTableManage";
import { dataHeaderManageProduct } from "../utils/dataFetch";
import ContentManageProductPage from "../components/content/ContentManageProductPage";
import IconPlus from "../components/icons/IconPlus";
import AdminCreateProductPage from "./AdminCreateProductPage";
import AdminUpdateProductPage from "./AdminUpdateProductPage";
const { Search } = Input;
const AdminManageProductPage: React.FC = () => {
  const { company, paginationCompany } = useSelector(
    (state: any) => state.company
  );
  const [createProduct, setCreateProduct] = useState(false);
  const [updateProduct, setUpdateProduct] = useState(false);
  const [page, setPage] = useState(1);
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
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
        <div className="mb-5 flex items-center gap-5">
          <Search
            placeholder="Nhập tên dịch vụ"
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
          <Radio.Group
            className="font-medium"
            onChange={onChange}
            value={value}
          >
            <Radio className="select-none" value={1}>
              Giá tiền cao nhất
            </Radio>
            <Radio className="select-none" value={2}>
              Thời gian lâu nhất
            </Radio>
            <Radio className="select-none" value={3}>
              Số lượng nhiều nhất
            </Radio>
          </Radio.Group>
          <div
            onClick={() => setCreateProduct(true)}
            className="ml-auto py-[10px] px-4 flex items-center gap-2 cursor-pointer hover:opacity-80 transition-all bg-primary text-white rounded-md"
          >
            <IconPlus classIcon="!w-5 !h-5"></IconPlus>
            <span className="font-medium">Thêm sản phẩm</span>
          </div>
          {createProduct ? (
            <AdminCreateProductPage
              onClick={setCreateProduct}
            ></AdminCreateProductPage>
          ) : (
            <></>
          )}
        </div>
        <Table>
          <HeaderTableManage
            dataHeader={dataHeaderManageProduct}
          ></HeaderTableManage>
          <tbody>
            <ContentManageProductPage
              onclick={setUpdateProduct}
            ></ContentManageProductPage>
            <ContentManageProductPage
              onclick={setUpdateProduct}
            ></ContentManageProductPage>
            <ContentManageProductPage
              onclick={setUpdateProduct}
            ></ContentManageProductPage>
            <ContentManageProductPage
              onclick={setUpdateProduct}
            ></ContentManageProductPage>
          </tbody>
        </Table>
        {updateProduct ? (
          <AdminUpdateProductPage
            onClick={setUpdateProduct}
          ></AdminUpdateProductPage>
        ) : (
          <></>
        )}
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
export default AdminManageProductPage;
