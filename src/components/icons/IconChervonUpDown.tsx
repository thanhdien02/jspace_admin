import React from "react";
interface PropComponent {
  className?: string;
  classIcon?: string;
}
const IconChervonUpDown: React.FC<PropComponent> = ({
  className,
  classIcon,
}) => {
  return (
    <span className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`w-6 h-6 ${classIcon}`}
      >
        <path
          fillRule="evenodd"
          d="M11.47 4.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 0 1-1.06-1.06l3.75-3.75Zm-3.75 9.75a.75.75 0 0 1 1.06 0L12 17.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 0 1 0-1.06Z"
          clipRule="evenodd"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
    </span>
  );
};

export default IconChervonUpDown;
