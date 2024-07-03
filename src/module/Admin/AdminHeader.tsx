import { Avatar } from "antd";
import React, { useEffect, useState } from "react";
import { UserOutlined, CaretDownOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { RiNotification3Line } from "react-icons/ri";
import CardNotificationAtHeaderPage from "../../components/cards/CardNotificationAtHeaderPage";
import { notificationGetNotification } from "../../store/notification/notification-slice";
const AdminHeader: React.FC = () => {
  const { notifications } = useSelector((state: any) => state.notification);
  const { users } = useSelector((state: any) => state.auth);
  const [notification, setNotification] = useState(false);
  const [numberRead, setNumberRead] = useState(0);
  const dispatch = useDispatch();
  const handleChangeNotification = () => {
    setNotification(!notification);
  };
  useEffect(() => {
    if (users?.id) dispatch(notificationGetNotification({ userId: users?.id }));
  }, [users?.id]);
  useEffect(() => {
    if (notifications?.length > 0) {
      const countRead = notifications.filter(
        (notification: any) => !notification.read
      ).length;
      setNumberRead(countRead);
    }
  }, [notifications]);
  return (
    <header className="flex px-6 py-4 justify-between items-center bg-white">
      <div className="">
        {/* <p className="text-primary">Hi {users?.username}</p> */}
        <h1 className="text-primary font-bold text-2xl">
         Chào mừng đến với trang quản lí !
        </h1>
      </div>

      <div className="relative ml-auto mr-4 ">
        <div
          onClick={handleChangeNotification}
          className="rounded-full border-2 border-solid border-primary p-[6px] cursor-pointer"
        >
          <RiNotification3Line className="text-xl text-primary" />
        </div>
        {notification && (
          <div className="absolute top-[120%] z-10 right-0 bg-white shadow-md rounded w-[300px] border border-solid border-stone-200">
            <div className="p-3 border-b border-solid border-gray-200">
              <h2 className="font-medium text-base">Thông báo</h2>
            </div>
            <div className="flex flex-col gap-2 max-h-[350px] overflow-auto">
              {notifications?.length > 0 &&
                notifications?.map((item: any) => (
                  <CardNotificationAtHeaderPage
                    key={item?.notification?.id}
                    item={item}
                    classname="border-b border-solid border-gray-200"
                  ></CardNotificationAtHeaderPage>
                ))}
            </div>
          </div>
        )}
        {numberRead != 0 && (
          <div className="absolute -top-1 -right-2 flex justify-center items-center w-5 h-5 rounded-full bg-red-500 text-white">
            {numberRead}
          </div>
        )}
      </div>
      <div className="flex gap-3 items-center cursor-pointer px-4 py-2 border border-solid border-transparent hover:border-primary rounded-lg transition-all ">
        <Avatar
          style={{ backgroundColor: "#87d068" }}
          icon={<UserOutlined />}
          className="self-center"
        />
        <div className="">
          <p className="font-semibold text-sm">{users?.username}</p>
          <p className="text-xs">{users?.role?.code}</p>
        </div>
        <CaretDownOutlined className="self-auto" />
      </div>
    </header>
  );
};

export default AdminHeader;
