import { CheckOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { notificationUpdateReadNotification } from "../../store/notification/notification-slice";
import { useSelector } from "react-redux";
interface PropComponent {
  classname?: string;
  item?: any;
}
const CardNotificationAtHeaderPage: React.FC<PropComponent> = ({
  classname,
  item,
}) => {
  const { user } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const handleUpdateReadNotification = () => {
    dispatch(
      notificationUpdateReadNotification({
        userId: user?.id,
        notificationId: item?.notification?.id,
        readStatus: !item?.read,
      })
    );
  };
  return (
    <>
      <div className={`py-1 px-4 pb-2 ${classname}`}>
        <h4 className="font-semibold text-base cursor-pointer hover:text-primary transition-all line-clamp-2">
          {item?.notification?.title}
        </h4>
        <p className="text-[14px] line-clamp-3">
          {item?.notification?.content}
        </p>
        <div className="mt-1 flex justify-between items-center">
          <p className="text-xs ">14/06/2024</p>
          <Popover
            content={
              <p>{!item?.read ? "Đánh dấu đã đọc" : "Đánh dấu chưa đọc"}</p>
            }
          >
            <CheckOutlined
              className={`cursor-pointer ${item?.read ? "text-red-500" : ""}`}
              onClick={handleUpdateReadNotification}
            />
          </Popover>
        </div>
      </div>
    </>
  );
};

export default CardNotificationAtHeaderPage;