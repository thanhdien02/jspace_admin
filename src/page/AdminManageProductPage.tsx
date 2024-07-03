import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../components/table/Table";
import { Empty, Pagination, Skeleton } from "antd";
import { debounce } from "ts-debounce";
import HeaderTableManage from "../components/header/HeaderTableManage";
import { dataHeaderManageProduct } from "../utils/dataFetch";
import ContentManageProductPage from "../components/content/ContentManageProductPage";
import IconPlus from "../components/icons/IconPlus";
import AdminCreateProductPage from "./AdminCreateProductPage";
import AdminUpdateProductPage from "./AdminUpdateProductPage";
import { productGetProduct } from "../store/product/product-slice";
import InputSearch from "../components/input/InputSearch";
import Button from "../components/button/Button";
const AdminManageProductPage: React.FC = () => {
  const { products, loadingProduct, paginationProduct } = useSelector(
    (state: any) => state.product
  );
  const dispatch = useDispatch();
  const [createProduct, setCreateProduct] = useState(false);
  const [popoverUpdateProduct, setPopoverUpdateProduct] = useState(false);
  const [page, setPage] = useState(1);
  const [size] = useState(10);
  const [productId, setProductId] = useState("");
  const [nameProduct, setNameProduct] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSearchProduct = debounce((value: any) => {
    setPage(1);
    setNameProduct(value);
    dispatch(
      productGetProduct({
        page: page,
        size: size,
        name: value,
      })
    );
  }, 500);
  const handleChangePage = (e: any) => {
    dispatch(
      productGetProduct({
        page: e,
        size: size,
        name: nameProduct,
      })
    );
    setPage(e);
  };
  useEffect(() => {
    dispatch(
      productGetProduct({
        page: page,
        size: size,
        name: nameProduct,
      })
    );
  }, []);
  return (
    <>
      <div className="m-10 mt-5">
        <div className="mb-5 flex items-center gap-5">
          <div className="w-[350px] flex items-center gap-2">
            <InputSearch
              className="w-full "
              placeholder="Nhập tên dịch vụ"
              onChange={(e: any) => {
                handleSearchProduct(e?.target?.value);
              }}
            ></InputSearch>
            <Button
              title="Tìm kiếm"
              type="button"
              className="text-sm font-medium text-nowrap rounded px-4"
            ></Button>
          </div>
          <div
            onClick={() => setCreateProduct(true)}
            className="ml-auto py-[10px] px-4 flex items-center gap-2 cursor-pointer hover:opacity-80 transition-all bg-white text-gray-700 rounded shadow"
          >
            <IconPlus
              classIcon="!w-5 !h-5"
              className="text-gray-700"
            ></IconPlus>
            <span className="font-medium">THÊM SẢN PHẨM</span>
          </div>
          {createProduct && (
            <AdminCreateProductPage
              onClick={setCreateProduct}
            ></AdminCreateProductPage>
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
                  className="even:bg-gray-300/50"
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
          {products.length > 0 && (
            <Pagination
              total={paginationProduct?.totalElements}
              onChange={handleChangePage}
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
