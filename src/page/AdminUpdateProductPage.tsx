import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import IconClose from "../components/icons/IconClose";
import { Select, Switch } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import IconMoney from "../components/icons/IconMoney";
import { dataDate } from "../utils/dataFetch";
import ButtonLoading from "../components/button/ButtonLoading";
import ReactQuill from "react-quill";
import { formats, modules } from "../utils/quill";
import "react-quill/dist/quill.snow.css";
import IconClock from "../components/icons/IconClock";
import IconCircleStack from "../components/icons/IconCircleStack";
interface PropComponent {
  className?: string;
  onClick?: any;
  updateCheck?: boolean;
}
interface Inputs {
  title?: string;
  price?: number;
  description?: string;
  quantity?: string;
  timeproduct?: string;
  timepost?: string;
}
const AdminUpdateProductPage: React.FC<PropComponent> = ({
  className,
  onClick,
}) => {
  const [jobDescription] = useState("");
  const {
    register,
    handleSubmit,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (dataUpdateCompany: Inputs) => {
    console.log("🚀 ~ dataUpdateCompany:", dataUpdateCompany);
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
              Cập nhật sản phẩm
            </h2>
            <div className="mr-5">
              <p className="font-medium text-sm">Tình trạng sản phẩm</p>
              <div>
                <Switch className="mt-2" size="default" />
              </div>
            </div>
          </div>
          <form action="" onSubmit={handleSubmit(onSubmit)} className="py-5">
            <div className="flex gap-10">
              <div className="grow-[1]">
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
                    {...register("title", {
                      required: true,
                    })}
                    placeholder="Tên sản phẩm"
                    type="text"
                    autoComplete="off"
                    id="name"
                    className="h-full pl-12 pr-4 focus:border-solid focus:border-stone-400/70 transition-all outline-none py-3 border border-stone-200 border-solid w-full rounded-md"
                  />
                </div>
                {errors.title?.type == "required" ? (
                  <p className="text-red-600 mt-1">
                    *Bạn chưa điền tên sản phẩm
                  </p>
                ) : (
                  <></>
                )}
              </div>
              <div className="grow-[1]">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Giá tiền <span className="text-red-500">*</span>
                </label>
                <div className="mt-2 relative">
                  <IconMoney className="absolute top-0 left-0 translate-x-[50%] translate-y-[40%] text-gray-400"></IconMoney>
                  <input
                    {...register("price", {
                      required: true,
                    })}
                    placeholder="Mức lương"
                    type="number"
                    autoComplete="off"
                    id="price"
                    className="h-full focus:border-solid focus:border-stone-400/70 transition-all outline-none pl-12 pr-4 py-3 border border-stone-200 border-solid w-full rounded-md"
                  />
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
                  htmlFor="timeproduct"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Thời gian sử dụng của dịch vụ{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="mt-2 relative">
                  <IconClock className="absolute top-0 left-0 translate-x-[50%] translate-y-[40%] text-gray-400"></IconClock>
                  <Select
                    showSearch
                    placeholder="Thời gian sử dụng dịch vụ"
                    allowClear={true}
                    className="select-custom h-11 focus:border-solid focus:border-stone-400/70 transition-all outline-none pl-10 pr-4 py-3 border border-stone-200 border-solid w-full rounded-md"
                    optionFilterProp="children"
                    filterOption={(input, option: any) =>
                      (option?.label ?? "").includes(input)
                    }
                    {...register("timeproduct", {
                      required: true,
                    })}
                    options={dataDate}
                    onChange={(e) => {
                      setValue("timeproduct", e);
                      clearErrors("timeproduct");
                    }}
                  />
                </div>
                {errors?.timeproduct?.type == "required" ? (
                  <p className="text-red-600 mt-1">
                    *Bạn chưa điền thời gian sử dụng dịch vụ
                  </p>
                ) : (
                  <></>
                )}
              </div>
              <div className="">
                <label
                  htmlFor="timepost"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Thời gian của mỗi bài đăng{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="mt-2 relative">
                  <IconClock className="absolute top-0 left-0 translate-x-[50%] translate-y-[40%] text-gray-400"></IconClock>
                  <Select
                    {...register("timepost", {
                      required: true,
                    })}
                    showSearch
                    allowClear={true}
                    placeholder="Thời gian của mỗi bài đăng"
                    className="select-custom h-11 focus:border-solid focus:border-stone-400/70 transition-all outline-none pl-10 pr-4 py-3 border border-stone-200 border-solid w-full rounded-md"
                    optionFilterProp="children"
                    filterOption={(input, option: any) =>
                      (option?.label ?? "").includes(input)
                    }
                    options={dataDate}
                    onChange={(e) => {
                      setValue("timepost", e);
                      clearErrors("timepost");
                    }}
                  />
                </div>
                {errors?.timepost?.type == "required" ? (
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
                  htmlFor="quantity"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Số lượng bài đăng <span className="text-red-500">*</span>
                </label>
                <div className="mt-2 relative">
                  <IconCircleStack className="absolute top-0 left-0 translate-x-[50%] translate-y-[40%] text-gray-400"></IconCircleStack>
                  <input
                    {...register("quantity", {
                      required: true,
                    })}
                    placeholder="Số lượng bài đăng"
                    type="number"
                    autoComplete="off"
                    id="quantity"
                    className="h-full focus:border-solid focus:border-stone-400/70 transition-all outline-none pl-12 pr-4 py-3 border border-stone-200 border-solid w-full rounded-md"
                  />
                  {errors?.quantity?.type == "required" ? (
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
                value={jobDescription}
                onChange={(content) => {
                  setValue("description", content);
                }}
                className="mt-2"
              />
            </div>
            <div className="flex justify-end mt-10">
              <ButtonLoading
                title="Lưu thông tin"
                loading={false}
              ></ButtonLoading>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminUpdateProductPage;
