import React from "react";
import TableRow from "../table/TableRow";
import TableRowContent from "../table/TableRowContent";
interface PropComponent {
  className?: string;
  item?: any;
}
const ContentManageCompanyPage: React.FC<PropComponent> = ({
  className,
  item,
}) => {
  return (
    <>
      <TableRow className={`${className} `}>
        <TableRowContent className="">{item?.id}</TableRowContent>
        <TableRowContent className="flex gap-2 items-center">
          <img
            src={
              item?.logo ? item?.logo : "https://biz.prlog.org/jspace/logo.png"
            }
            alt=""
            className="w-10 h-8 object-cover"
          />
          <a
            className="line-clamp-1 hover:text-primary font-medium"
            href={`https://jspace-fe.vercel.app/companys/${item?.id}`}
            target="_blank"
          >
            {item?.name}
          </a>
        </TableRowContent>
        <TableRowContent className="">{item?.email}</TableRowContent>
        <TableRowContent className="">{item?.phone}</TableRowContent>
        <TableRowContent className="">
          <a
            className="line-clamp-1 break-words w-[250px] hover:text-primary"
            href={item?.companyLink}
            target="_blank"
          >
            {item?.companyLink}
          </a>
        </TableRowContent>
        {/* <TableRowContent className="">
          <Switch checked={true} onChange={() => {}} />
        </TableRowContent> */}
      </TableRow>
    </>
  );
};

export default ContentManageCompanyPage;
