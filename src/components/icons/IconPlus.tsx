import React from "react";
interface ComponentProp {
  className?: string;
  classIcon?: string;
}
const IconPlus: React.FC<ComponentProp> = ({ className, classIcon }) => {
  return (
    <span className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className={`w-6 h-6 ${classIcon}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
          stroke="currentColor"
          strokeWidth="3"
        />
      </svg>
    </span>
  );
};

export default IconPlus;
