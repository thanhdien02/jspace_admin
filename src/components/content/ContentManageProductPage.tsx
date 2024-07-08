import React from "react";
import TableRow from "../table/TableRow";
import TableRowContent from "../table/TableRowContent";
import { convertDollarToVN } from "../../utils/common-fucntion";
interface PropComponent {
  className?: string;
  onclick?: any;
  item?: any;
  onProductId?: any;
}
const ContentManageProductPage: React.FC<PropComponent> = ({
  className = "",
  onclick,
  item,
  onProductId,
}) => {
  return (
    <TableRow className={`${className}`}>
      <TableRowContent className="">{item?.id}</TableRowContent>
      <TableRowContent className="">
        <div className="line-clamp-2">{item?.name}</div>
      </TableRowContent>
      <TableRowContent className="">
        {item?.price}$ /{" "}
        {convertDollarToVN(Number(item?.price), 24000).toLocaleString("vi", {
          style: "currency",
          currency: "VND",
        })}
      </TableRowContent>
      <TableRowContent className="">
        {item?.numberOfPost} bài đăng
      </TableRowContent>
      <TableRowContent className="">
        {item?.durationDayNumber} ngày
      </TableRowContent>
      <TableRowContent className="">{item?.postDuration} ngày</TableRowContent>
      <TableRowContent className="">
        <span
          className="px-2 py-1 text-xs bg-white text-primary border border-solid border-primary shadow font-medium cursor-pointer hover:opacity-80 transition-all"
          onClick={() => {
            onclick(true);
            onProductId(item?.id);
          }}
        >
          CHỈNH SỬA
        </span>
      </TableRowContent>
    </TableRow>
  );
};

export default ContentManageProductPage;
