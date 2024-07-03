import React from "react";

interface PropComponent {
  className?: string;
  title?: any;
}
const TableHeaderContent: React.FC<PropComponent> = ({ className, title }) => {
  return (
    <>
      <th className={`text-start px-4 py-4 ${className}`}>{title}</th>
    </>
  );
};

export default TableHeaderContent;
