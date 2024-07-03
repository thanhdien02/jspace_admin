import React from "react";

interface PropComponent {
  className?: string;
  children?: any;
}
const Table: React.FC<PropComponent> = ({ children, className }) => {
  return <table className={`bg-white w-full ${className}`}>{children}</table>;
};

export default Table;
