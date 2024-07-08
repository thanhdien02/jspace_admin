import React, { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import IconClose from "../components/icons/IconClose";
import { Popconfirm, Skeleton } from "antd";
import { HomeOutlined, DollarOutlined } from "@ant-design/icons";
import ButtonLoading from "../components/button/ButtonLoading";
import "react-quill/dist/quill.snow.css";
import IconClock from "../components/icons/IconClock";
import IconCircleStack from "../components/icons/IconCircleStack";
import VNCurrencyInput from "../components/input/InputMoney";
import InputNumber from "../components/input/InputNumber";
import { useDispatch, useSelector } from "react-redux";
import {
  productDeleteProductById,
  productGetProductById,
  productUpdateProduct,
} from "../store/product/product-slice";
interface PropComponent {
  productId: string;
  className?: string;
  onClick?: any;
  updateCheck?: boolean;
}
interface Inputs {
  name?: string;
  price: string;
  description?: string;
  numberOfPost: string;
  durationDayNumber: string;
  postDuration: string;
}
const AdminUpdateProductPage: React.FC<PropComponent> = ({
  className,
  onClick,
  productId,
}) => {
  const { messageProduct, loadingProduct, productById } = useSelector(
    (state: any) => state.product
  );
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (dataUpdateProduct: Inputs) => {
    console.log("🚀 ~ dataUpdateProduct:", dataUpdateProduct);
    dispatch(
      productUpdateProduct({
        ...dataUpdateProduct,
        product_id: productId,
      })
    );
    // reset();
  };
  useEffect(() => {
    const body = document.body;
    if (body) {
      body.style.overflow = "hidden";
      return () => {
        body.style.overflow = "visible";
      };
    }
  }, []);
  useEffect(() => {
    dispatch(productGetProductById({ product_id: productId }));
  }, [messageProduct]);
  useEffect(() => {
    if (productById?.id) {
      setValue("name", productById?.name);
      setValue("durationDayNumber", productById?.durationDayNumber);
      setValue("price", productById?.price?.toString());
      setValue("numberOfPost", productById?.numberOfPost);
      setValue("postDuration", productById?.postDuration);
      setValue("description", productById?.description);
    }
  }, [productById]);
  return (
    <>
      <div className="fixed z-20 inset-0">
        <div
          onClick={() => onClick(false)}
          className={`fixed z-10 flex inset-0 bg-black/30 ${className}`}
        ></div>
        {loadingProduct ? (
          <div className="absolute inset-0 z-10 shadow-lg m-auto w-[70%] h-[80%] p-10 bg-white overflow-auto">
            <Skeleton />
          </div>
        ) : (
          <div className="absolute inset-0 z-10 shadow-lg m-auto w-[70%] h-[80%] p-10 bg-white overflow-auto">
            <span
              className="absolute right-3 top-3 cursor-pointer hover:bg-gray-200 rounded-sm"
              onClick={() => onClick(false)}
            >
              <IconClose></IconClose>
            </span>
            <div className="flex justify-between items-end">
              <h2 className="font-bold text-lg my-2 text-gray-800">
                Cập nhật sản phẩm
              </h2>
              <div className="mr-5">
                <Popconfirm
                  title="Xác nhận xóa sản phẩm."
                  description="Bạn có chắc chắn xóa sản phẩm ?"
                  okText="Đồng ý"
                  cancelText="Không"
                  onConfirm={() => {
                    dispatch(
                      productDeleteProductById({ product_id: productById?.id })
                    );
                    onClick(false);
                  }}
                  onCancel={() => {}}
                >
                  <p className="text-sm cursor-pointer px-2 py-1 bg-red-500 rounded text-white font-medium hover:opacity-80 transition-all">
                    Xóa sản phẩm
                  </p>
                </Popconfirm>
              </div>
            </div>
            <form action="" onSubmit={handleSubmit(onSubmit)} className="py-5">
              <div className="grid grid-cols-2 gap-10">
                <div className="">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Tên sản phẩm <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2 relative">
                    <HomeOutlined
                      style={{
                        fontSize: "20px",
                        color: "rgb(156 163 175)",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        transform: "translate(65%, 60%)",
                      }}
                    />
                    <input
                      {...register("name", {
                        required: true,
                      })}
                      placeholder="Tên sản phẩm"
                      type="text"
                      autoComplete="off"
                      id="name"
                      className="h-full pl-12 pr-4 focus:border-solid focus:border-stone-400/70 transition-all outline-none py-3 border border-stone-200 border-solid w-full rounded-md"
                    />
                  </div>
                  {errors.name?.type == "required" && (
                    <p className="text-red-600 mt-1">
                      *Bạn chưa điền tên sản phẩm
                    </p>
                  )}
                </div>
                <div className="">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Giá tiền <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2 relative">
                    <Controller
                      name="price"
                      rules={{
                        required: "Bạn chưa điền giá tiền",
                      }}
                      control={control}
                      render={({ field }) => (
                        <VNCurrencyInput
                          value={field.value}
                          onValueChange={field.onChange}
                        />
                      )}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 font-medium">
                      <DollarOutlined className="text-2xl" />
                    </span>
                  </div>
                  {errors?.price?.type == "required" && (
                    <p className="text-red-600 mt-1">*Bạn chưa điền giá tiền</p>
                  )}
                </div>
              </div>
              {/*  */}

              <div className="grid grid-cols-2 gap-10 mt-5">
                <div className="">
                  <label
                    htmlFor="durationDayNumber"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Thời gian sử dụng của dịch vụ
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2 relative">
                    <IconClock className="absolute top-0 left-0 translate-x-[50%] translate-y-[40%] text-gray-400"></IconClock>
                    <Controller
                      name="durationDayNumber"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: "Bạn chưa điền thời gian sử dụng dịch vụ",
                      }}
                      render={({ field }) => (
                        <InputNumber
                          value={field.value}
                          onChange={field.onChange}
                          placeholder="Thời gian sử dụng của dịch vụ"
                        />
                      )}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 font-medium">
                      ngày
                    </span>
                  </div>
                  {errors?.durationDayNumber?.type == "required" && (
                    <p className="text-red-600 mt-1">
                      *Bạn chưa điền thời gian sử dụng dịch vụ
                    </p>
                  )}
                </div>
                <div className="">
                  <label
                    htmlFor="postDuration"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Thời gian của mỗi bài đăng
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2 relative">
                    <IconClock className="absolute top-0 left-0 translate-x-[50%] translate-y-[40%] text-gray-400"></IconClock>
                    <Controller
                      name="postDuration"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: "Bạn chưa điền thời gian của mỗi bài đăng",
                      }}
                      render={({ field }) => (
                        <InputNumber
                          value={field.value}
                          onChange={field.onChange}
                          placeholder="Thời gian của mỗi bài đăng"
                        />
                      )}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 font-medium">
                      ngày
                    </span>
                  </div>
                  {errors?.postDuration?.type == "required" ? (
                    <p className="text-red-600 mt-1">
                      *Bạn chưa điền thời gian của mỗi bài đăng
                    </p>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 mt-5 gap-10">
                <div className="w-full">
                  <label
                    htmlFor="numberOfPost"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Số lượng bài đăng <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2">
                    <div className=" relative">
                      <IconCircleStack className="absolute top-0 left-0 translate-x-[50%] translate-y-[40%] text-gray-400"></IconCircleStack>
                      <Controller
                        name="numberOfPost"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Bạn chưa điền số lượng bài đăng" }}
                        render={({ field }) => (
                          <InputNumber
                            value={field.value}
                            onChange={field.onChange}
                            placeholder="Số lượng bài đăng"
                          />
                        )}
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 font-medium">
                        bài đăng
                      </span>
                    </div>
                    {errors?.numberOfPost?.type == "required" ? (
                      <p className="text-red-600 mt-1">
                        *Bạn chưa điền số lượng bài đăng
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="mt-5 w-full">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mô tả công việc
                </label>
                <textarea
                  id="description"
                  {...register("description", {
                    required: true,
                  })}
                  className="shadow appearance-none border min-h-[120px] mt-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              {errors?.description?.type == "required" ? (
                <p className="text-red-600 mt-1">
                  *Bạn chưa điền mô tả của dịch vụ
                </p>
              ) : (
                <></>
              )}
              <div className="flex justify-end mt-10">
                <ButtonLoading
                  title="Lưu thông tin"
                  loading={loadingProduct}
                ></ButtonLoading>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminUpdateProductPage;
