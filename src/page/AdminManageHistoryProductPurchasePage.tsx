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
import { dataHeaderManagePurchaseProduct } from "../utils/dataFetch";
import ContentManageHistoryProductPurchasePage from "../components/content/ContentManageHistoryProductPurchasePage";
import { purchasehistoryGetPurchaseHistory } from "../store/purchase_history/purchase-history-slice";
const AdminManageHistoryProductPurchasePage: React.FC = () => {
  const {
    purchasehistorys,
    loadingPurchaseHistory,
    paginationPurchaseHistory,
  } = useSelector((state: any) => state.purchasehistory);
  const dispatch = useDispatch();
  const [companyName, setCompanyName] = useState("");
  const [productName, setProductName] = useState("");
  const [page, setPage] = useState(1);
  const [value, setValue] = useState(1);
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    dispatch(
      purchasehistoryGetPurchaseHistory({
        page: page,
        size: 10,
        companyName: "",
        productName: "",
      })
    );
  }, []);
  const handleSearchCompanyName = debounce((value: any) => {
    setPage(1);

    dispatch(
      purchasehistoryGetPurchaseHistory({
        page: page,
        size: 10,
        companyName: value?.target?.value,
        productName: productName,
      })
    );
    setCompanyName(value?.target?.value);
  }, 500);

  const handleSearchProductName = debounce((value: any) => {
    setPage(1);
    dispatch(
      purchasehistoryGetPurchaseHistory({
        page: page,
        size: 10,
        companyName: companyName,
        productName: value?.target?.value,
      })
    );
    setProductName(value?.target?.value);
  }, 500);
  const handleChangePage = (e: any) => {
    setPage(e);
    dispatch(
      purchasehistoryGetPurchaseHistory({
        page: e,
        size: 10,
        companyName: companyName,
        productName: productName,
      })
    );
  };
  return (
    <>
      <div className="m-10 mt-5">
        
        <div className="mb-5 flex items-center gap-5">
          <Input
            placeholder="Nhập tên dịch vụ"
            size="large"
            onInput={handleSearchProductName}
            // value={productName}
            className="w-[20%]"
            allowClear
          />
          <Input
            placeholder="Nhập tên công ty"
            size="large"
            onInput={handleSearchCompanyName}
            // value={productName}
            className="w-[20%]"
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
          </Radio.Group>
        </div>
        <Table>
          <HeaderTableManage
            dataHeader={dataHeaderManagePurchaseProduct}
          ></HeaderTableManage>
          <tbody>
            {loadingPurchaseHistory ? (
              <tr>
                <td className="p-5 text-center" colSpan={8}>
                  <Skeleton active />
                </td>
              </tr>
            ) : purchasehistorys?.length > 0 ? (
              purchasehistorys?.map((item: any) => (
                <ContentManageHistoryProductPurchasePage
                  key={item?.id}
                  item={item}
                  className="even:bg-gray-300/50"
                ></ContentManageHistoryProductPurchasePage>
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
          {purchasehistorys.length <= 0 ? (
            <></>
          ) : (
            <Pagination
              total={paginationPurchaseHistory?.totalElements}
              onChange={handleChangePage}
              className="inline-block"
              current={page}
              pageSize={paginationPurchaseHistory?.pageSize}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AdminManageHistoryProductPurchasePage;
