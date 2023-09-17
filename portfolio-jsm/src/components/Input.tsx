import React, { CSSProperties } from "react";
import { InputProps } from "@/src/types";

const Input = ({
  type,
  placeholder,
  onChange,
  width,
  height,
  style,
  inputColor,
  name,
}: InputProps) => {
  const inputStyle: CSSProperties = {
    width: width || "100%",
    height: height || "2.5rem",
    ...style,
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`block rounded-[10px] ${inputColor} px-4 py-2`}
      style={inputStyle}
      onChange={onChange}
      name={name}
    />
  );
};

export default Input;
