import React from "react";

interface PropComponent {
  onFilter?: any;
  className?: string;
  title?: any;
  item?: any;
}
const TableHeaderContent: React.FC<PropComponent> = ({
  className,
  title,
  onFilter,
  item,
}) => {
  return (
    <>
      <th
        className={`text-start px-4 py-4 ${className}`}
        onClick={
          onFilter
            ? () => {
                onFilter(item?.name);
              }
            : () => {}
        }
      >
        {title}
      </th>
    </>
  );
};

export default TableHeaderContent;
