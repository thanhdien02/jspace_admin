import React from "react";
import TableHeaderContent from "../table/TableHeaderContent";
import TableHeader from "../table/TableHeader";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
interface PropComponent {
  className?: string;
  dataHeader?: any;
  sortFilter?: "asc" | "desc" | "";
  name?: string;
  onFilter?: any;
}
const HeaderTableManage: React.FC<PropComponent> = ({
  className,
  dataHeader,
  onFilter,
  sortFilter = "",
  name,
}) => {
  return (
    <>
      <TableHeader className={`w-full ${className}`}>
        {dataHeader?.length > 0 &&
          dataHeader?.map((item: any, index: number) => (
            <TableHeaderContent
              item={item}
              title={
                item?.filter ? (
                  <div className="flex items-center gap-2 hover:opacity-70 transition-all cursor-pointer text-nowrap">
                    <span>{item?.title}</span>
                    <div className="flex flex-col justify-center items-center">
                      <TiArrowSortedUp
                        className={`${
                          sortFilter == "desc" &&
                          name == item?.name &&
                          "text-primary"
                        }`}
                      />
                      <TiArrowSortedDown
                        className={`${
                          sortFilter == "asc" &&
                          name == item?.name &&
                          "text-primary"
                        }`}
                      />
                    </div>
                  </div>
                ) : (
                  item?.title
                )
              }
              className={`${item?.className ? item.className : ""}`}
              key={index}
              onFilter={onFilter}
            ></TableHeaderContent>
          ))}
      </TableHeader>
    </>
  );
};

export default HeaderTableManage;
