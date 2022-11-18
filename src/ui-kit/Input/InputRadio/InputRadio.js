import React, { forwardRef } from "react";
import "./InputRadio.scss";
import clsx from "clsx";

export const InputRadio = forwardRef(
  ({ className, autoComplete, label, name, type, ...rest }, ref) => {
    return (
      <label className="inputRadioLabel">
        <input
          className="inputRadio"
          autoComplete={autoComplete}
          name={name}
          value={label}
          type={type}
          ref={ref}
          {...rest}
        />
        {label}
      </label>
    );
  }
);

InputRadio.displayName = "InputRadio";
