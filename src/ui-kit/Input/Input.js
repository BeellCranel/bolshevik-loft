import React, { forwardRef } from "react";
import "./Input.scss";
import clsx from "clsx";

export const Input = forwardRef(
  ({ className, autoComplete, name, type, error, ...rest }, ref) => {
    return (
      <input
        className={clsx("input", className)}
        autoComplete={autoComplete}
        name={name}
        type={type}
        ref={ref}
        {...rest}
      />
    );
  }
);

Input.displayName = "Input";
