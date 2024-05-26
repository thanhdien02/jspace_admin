import React, { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import IconClose from "../components/icons/IconClose";
import { Switch } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import ButtonLoading from "../components/button/ButtonLoading";
import ReactQuill from "react-quill";
import { formats, modules } from "../utils/quill";
import "react-quill/dist/quill.snow.css";
import IconClock from "../components/icons/IconClock";
import IconCircleStack from "../components/icons/IconCircleStack";
import VNCurrencyInput from "../components/input/InputMoney";
import InputNumber from "../components/input/InputNumber";
import { useDispatch, useSelector } from "react-redux";
import {
  productCreateProduct,
  productUpdateMessageRedux,
} from "../store/product/product-slice";
interface PropComponent {
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
const AdminCreateProductPage: React.FC<PropComponent> = ({
  className,
  onClick,
}) => {
  const { loadingProduct, messageProduct } = useSelector(
    (state: any) => state.product
  );
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (dataProduct: Inputs) => {
    console.log("🚀 ~ dataProduct:", dataProduct);
    dispatch(productCreateProduct(dataProduct));
    // reset();
  };
  const [productDescription, setProductDescription] = useState("");
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
    if (messageProduct === "createsuccess") {
      reset();
      setProductDescription("");
      dispatch(productUpdateMessageRedux({ messageProduct: "" }));
    }
  }, [messageProduct]);
  return (
    <>
      <div className="fixed z-20 inset-0">
        <div
          onClick={() => onClick(false)}
          className={`fixed z-10 flex inset-0 bg-black/30 ${className}`}
        ></div>
        <div className="absolute inset-0 z-10 shadow-lg m-auto w-[70%] h-[80%] p-10 bg-white overflow-auto">
          <span
            className="absolute right-3 top-3 cursor-pointer hover:bg-gray-200 rounded-sm"
            onClick={() => onClick(false)}
          >
            <IconClose></IconClose>
          </span>
          <div className="flex justify-between items-end">
            <h2 className="font-bold text-lg my-2 text-gray-800">
              Tạo sản phẩm
            </h2>
            <div className="mr-5">
              <p className="font-medium text-sm">Tình trạng sản phẩm</p>
              <div>
                <Switch className="mt-2" size="default" />
              </div>
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
                {errors.name?.type == "required" ? (
                  <p className="text-red-600 mt-1">
                    *Bạn chưa điền tên sản phẩm
                  </p>
                ) : (
                  <></>
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
                    control={control}
                    render={({ field }) => (
                      <VNCurrencyInput
                        value={field.value}
                        onValueChange={field.onChange}
                      />
                    )}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 font-medium">
                    VND
                  </span>
                </div>
                {errors?.price?.type == "required" ? (
                  <p className="text-red-600 mt-1">*Bạn chưa điền giá tiền</p>
                ) : (
                  <></>
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
                {errors?.durationDayNumber?.type == "required" ? (
                  <p className="text-red-600 mt-1">
                    *Bạn chưa điền thời gian sử dụng dịch vụ
                  </p>
                ) : (
                  <></>
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
                <div className="mt-2 relative">
                  <IconCircleStack className="absolute top-0 left-0 translate-x-[50%] translate-y-[40%] text-gray-400"></IconCircleStack>
                  <Controller
                    name="numberOfPost"
                    control={control}
                    defaultValue=""
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
              <ReactQuill
                id="description"
                theme="snow"
                modules={modules}
                formats={formats}
                value={productDescription}
                onChange={(content) => {
                  setValue("description", content);
                  setProductDescription(content);
                }}
                className="mt-2"
              />
            </div>
            <div className="flex justify-end mt-10">
              <ButtonLoading
                title="Lưu thông tin"
                loading={loadingProduct}
              ></ButtonLoading>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminCreateProductPage;
