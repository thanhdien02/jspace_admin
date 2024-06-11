import React from "react";
import TableRow from "../table/TableRow";
import TableRowContent from "../table/TableRowContent";
import { Popconfirm, Switch } from "antd";
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
      <TableRow className={`${className}`}>
        <TableRowContent className="">{item?.id}</TableRowContent>
        <TableRowContent className="">{item?.name}</TableRowContent>
        <TableRowContent className="">{item?.email}</TableRowContent>
        <TableRowContent className="">{item?.phone}</TableRowContent>
        <TableRowContent className="">{item?.companyLink}</TableRowContent>
        <TableRowContent className="">
          <Popconfirm
            title="Khóa tài khoản"
            description="Bạn có chắc khóa tài khoản ?"
            okText="Đồng ý"
            cancelText="Không"
            onCancel={() => {}}
          >
            <Switch checked={true} onChange={() => {}} />
          </Popconfirm>
        </TableRowContent>
      </TableRow>
    </>
  );
};

export default ContentManageCompanyPage;
