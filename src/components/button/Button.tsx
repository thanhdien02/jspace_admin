import React from "react";

interface PropComponent {
  className?: string;
  type?: "submit" | "reset" | "button";
  title?: string;
}
const Button: React.FC<PropComponent> = ({
  className,
  title,
  type = "submit",
}) => {
  return (
    <>
      <button
        type={type}
        className={`px-3 py-2 text-white bg-primary hover:opacity-80 transition-all ${className}`}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
