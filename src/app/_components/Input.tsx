import React, { ChangeEvent, FC } from "react";

interface InputProps {
  type: "text" | "number" | "email" | "password";
  label: string;
  name: string;
  placeholder: string;
  error: boolean;
  disabled?: boolean;
}

const Input: FC<InputProps> = ({
  type,
  label,
  name,
  placeholder,
  error,
  disabled,
}) => {
  return (
    <div className="input-wrapper flex flex-col ">
      <label className="font-semibold py-3"  htmlFor={label}>{label}</label>
      <input
        className="p-3 shadow-2xl h-[80px]"
        data-aos="fade-up"
        type={type}
        id={label}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && <p className="error">Input filed can&apos;t be empty!</p>}
    </div>
  );
};

export default Input;
