import React, { ReactNode } from "react";

import BtnLoading from "./BtnLoading";

type ButtonProps = {
  title?: string;
  variant?:
    | "primary"
    | "red"
    | "orange"
    | "white"
    | "outLined"
    | "gray"
    | "outLinedRed"
    | "black-clear"
    | "green_cat"
    | "green_cat_disbled"
    | "transparent";
  containerClass?: string;
  titleClass?: string;
  justify?: "lightBlue" | "green" | "between" | "center" | "center-reverse";
  roundedClass?: string;
  width?: string;
  icon?: ReactNode;
  size?: "sm" | "smx" | "md" | "lg" | "xs" | "xmd";
  onClick?: (e?: React.MouseEvent) => void;
  rules?: boolean;
  loading?: boolean;
  disabled?: boolean;
};
const buttonConfig = {
  //Variants
  primary: "btn-primary disabled:bg-[#C0C0C0] disabled:border-gray-300 ",
  green_cat: "btn-primary-green_2  disabled:border-gray-300 ",
  green_cat_disbled: "btn-primary-green_3  disabled:border-gray-300 ",
  "black-clear": " text-black dark:text-zinc-400 bg-transparent",
  outLined: "btn-outlined disabled:bg-gray-300 disabled:border-gray-300 ",
  transparent: "bg-transparent  ",
  outLinedRed:
    "btn-outlined  disabled:border-gray-300 bg-red-100 dark:bg-red-800 !text-primary-700  hover:ring-2 hover:ring-primary-700/50  !border-primary-700 cursor-pointer",
  // "primary-outline":
  //   "bg-transparent text-primary-700 border-2 border-primary-700 hover:ring-2 hover:ring-primary-700/50",
  // "primary-clear": "bg-white  dark:bg-slate-700  text-primary-700",
  red: "bg-red-100 border-2 dark:bg-red-800 text-white  hover:ring-2 hover:ring-red-700/50  cursor-pointer",
  orange: "bg-orange-100 dark:bg-red-800 text-white  hover:ring-2 hover:ring-orange-100/50  cursor-pointer ",
  white:
    "bg-white   transition-all duration-150 ease-in-out dark:bg-slate-700  dark:bg-gray-400 dark:text-gray-100 text-black  hover:ring-2 hover:ring-white/70 border-2 cursor-pointer",
  gray: "bg-gray-1200  dark:bg-slate-700  dark:bg-gray-400 dark:text-gray-100 text-black  hover:ring-2 hover:ring-white/70 cursor-pointer",
  // Sizes
  sm: "px-3 py-1.5",
  xs: "px-4 py-1",
  smx: "h-10 flex items-center justify-center gap-2 w-full",
  md: "px-7 py-2.5",
  xmd: "px-9 py-2.5",
  lg: "px-10 py-4",
  "center-reverse": "flex flex-row-reverse justify-center items-center",
  center: "flex  justify-center items-center",
  between: "flex  justify-between items-center",
  green: "btn-primary-green disabled:bg-gray-300 disabled:border-gray-300 shadow-lg shadow-primary-700/20",
  "primary-outline":
    "bg-transparent text-primary-700 border-2 border-primary-700 hover:ring-2 hover:ring-primary-700/50",
  "primary-clear": "bg-white  dark:bg-slate-700  text-primary-700",
  lightBlue: "bg-lightBlue-100 text-primary-blue",
};
const Button = ({
  title,
  icon,
  variant = "primary",
  containerClass,
  size = "md",
  titleClass,
  width = "w-fit",
  justify = "center",
  roundedClass = "rounded-md",
  disabled,
  loading,
  onClick,
}: ButtonProps): JSX.Element => {
  const btnTitle = ` ${titleClass || "text-md text-center font-medium"}`;
  return (
    <div className={containerClass}>
      <button
        disabled={disabled || loading}
        type="button"
        className={` relative transition-all duration-150 ease-in-out font-medium text-base ${buttonConfig[variant]} ${
          buttonConfig[size]
        } ${buttonConfig[justify]}  ${btnTitle}  ${roundedClass} ${width} ${(disabled || loading) && ""}`}
        onClick={typeof onClick == "function" ? onClick : void null}
      >
        {loading ? (
          // <div className="absolute right-2 mb-1">
          //   <BtnLoading />
          // </div>
          <div className={`flex w-full h-full items-center justify-center right-2 mb-1      ${width}`}>
            <BtnLoading />
          </div>
        ) : (
          <>
            {" "}
            {!!icon && <span className="mr-2">{icon}</span>}
            {title}
          </>
        )}
      </button>
    </div>
  );
};

export default Button;

/* 
 title,
  icon,
  background = 'bg-primary-800',
  containerClass,
  size = "md",
  hasFocus = true,
  titleClass,
  roundedClass,
  disabled,
  loading,
  onClick,
}) => {
  let btnlass = "relative inline-flex items-center ";
  let btnBg = `${background} ${hasFocus && `focus:ring-2 focus:ring-${background}/50`}`;
*/
