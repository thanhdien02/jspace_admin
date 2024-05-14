import React from "react";
import TableRow from "../table/TableRow";
import TableRowContent from "../table/TableRowContent";
interface PropComponent {
  className?: string;
  onclick?: any;
}
const ContentManageProductPage: React.FC<PropComponent> = ({
  className = "",
  onclick,
}) => {
  return (
    <>
      <TableRow className={`${className}`}>
        <TableRowContent className="">1</TableRowContent>
        <TableRowContent className="">
          <div className="line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            itaque unde magni obcaecati numquam alias magnam, ut omnis assumenda
            nisi quasi tempora, earum hic possimus! Eveniet ut libero minima
            modi.
          </div>
        </TableRowContent>
        <TableRowContent className="">1.500.000 VND</TableRowContent>
        <TableRowContent className="">10</TableRowContent>
        <TableRowContent className="">20 ngày</TableRowContent>
        <TableRowContent className="">30 ngày</TableRowContent>
        <TableRowContent className="">
          <span
            className="px-2 py-1 bg-primary text-white cursor-pointer"
            onClick={() => onclick(true)}
          >
            Chỉnh sửa
          </span>
        </TableRowContent>
      </TableRow>
    </>
  );
};

export default ContentManageProductPage;
