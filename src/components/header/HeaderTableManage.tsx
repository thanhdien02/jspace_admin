import React from "react";
import TableHeaderContent from "../table/TableHeaderContent";
import TableHeader from "../table/TableHeader";
import IconChervonUpDown from "../icons/IconChervonUpDown";
interface PropComponent {
  className?: string;
  dataHeader?: any;
}
const HeaderTableManage: React.FC<PropComponent> = ({
  className,
  dataHeader,
}) => {
  return (
    <>
      <TableHeader className={`w-full ${className}`}>
        {dataHeader?.length > 0 &&
          dataHeader?.map((item: any, index: number) => (
            <TableHeaderContent
              title={
                item?.filter ? (
                  <div className="flex items-end gap-1 hover:opacity-70 transition-all cursor-pointer text-nowrap">
                    <span>{item?.title}</span>
                    <IconChervonUpDown classIcon="!w-5 !h-5"></IconChervonUpDown>
                  </div>
                ) : (
                  item?.title
                )
              }
              className={`${item?.className ? item.className : ""}`}
              key={index}
            ></TableHeaderContent>
          ))}
      </TableHeader>
    </>
  );
};

export default HeaderTableManage;
