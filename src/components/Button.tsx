import React, { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  to?: string;
};

const Button: React.FC<Props> = ({ to, className, children, ...props }) => {
  if (typeof to === "string") {
    return (
      <button
        className={`${
          className ?? ""
        }  transform border-2 bg-white py-2 px-4 font-bold shadow-lg transition duration-150 ease-in-out hover:underline `}
        {...props}
      >
        <a href={to} target="_blank">
          {children}
        </a>
      </button>
    );
  }

  return (
    <button
      className={`${
        className ?? ""
      }  transform border-2 bg-white py-2 px-4 font-bold shadow-lg transition duration-150 ease-in-out hover:underline `}
      {...props}
    />
  );
};
export default Button;
