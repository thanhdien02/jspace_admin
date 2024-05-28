import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../components/table/Table";
import {
  Empty,
  Input,
  Pagination,
  Radio,
  RadioChangeEvent,
  Skeleton,
} from "antd";
import { debounce } from "ts-debounce";
import HeaderTableManage from "../components/header/HeaderTableManage";
import { dataHeaderManageProduct } from "../utils/dataFetch";
import ContentManageProductPage from "../components/content/ContentManageProductPage";
import IconPlus from "../components/icons/IconPlus";
import AdminCreateProductPage from "./AdminCreateProductPage";
import AdminUpdateProductPage from "./AdminUpdateProductPage";
import { productGetProduct } from "../store/product/product-slice";
const { Search } = Input;
const AdminManageProductPage: React.FC = () => {
  const { products, loadingProduct, paginationProduct } = useSelector(
    (state: any) => state.product
  );
  const dispatch = useDispatch();
  const [createProduct, setCreateProduct] = useState(false);
  const [popoverUpdateProduct, setPopoverUpdateProduct] = useState(false);
  const [page, setPage] = useState(1);
  const [value, setValue] = useState(1);
  const [productId, setProductId] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSearchProduct = debounce((value: any) => {
    setPage(1);
    setNameProduct(value);
    dispatch(
      productGetProduct({
        page: page,
        size: 10,
        name: value,
      })
    );
  }, 500);

  useEffect(() => {
    dispatch(
      productGetProduct({
        page: page,
        size: 10,
        name: nameProduct,
      })
    );
  }, [page]);
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
              handleSearchProduct(e?.target?.value);
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
            {loadingProduct ? (
              <tr>
                <td className="p-5 text-center" colSpan={7}>
                  <Skeleton active />
                </td>
              </tr>
            ) : products?.length > 0 ? (
              products?.map((item: any) => (
                <ContentManageProductPage
                  key={item?.id}
                  item={item}
                  onclick={setPopoverUpdateProduct}
                  onProductId={setProductId}
                ></ContentManageProductPage>
              ))
            ) : (
              <tr>
                <td className="p-5 text-center" colSpan={7}>
                  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                </td>
              </tr>
            )}
          </tbody>
        </Table>

        <div className="mt-4 flex justify-end">
          {products.length <= 0 ? (
            <></>
          ) : (
            <Pagination
              total={paginationProduct?.totalElements}
              onChange={(e) => setPage(e)}
              className="inline-block"
              current={page}
              pageSize={paginationProduct?.pageSize}
            />
          )}
        </div>

        {/* update product */}
        {popoverUpdateProduct ? (
          <AdminUpdateProductPage
            productId={productId}
            onClick={setPopoverUpdateProduct}
          ></AdminUpdateProductPage>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
export default AdminManageProductPage;
