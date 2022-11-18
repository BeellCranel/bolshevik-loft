import React from "react";
import "./RadioGroup.scss";
import clsx from "clsx";
import InputRadio from "../Input/InputRadio";

export const RadioGroup = ({
  className,
  labels,
  name,
  title,
  type,
  register,
  error,
  isFocused,
  isRequired,
  onBlur,
  onFocus,
}) => {
  return (
    <>
      <div
        className={clsx("radioSet", className, {
          radioSet__active: isFocused,
          radioSet__error: error,
        })}
      >
        <p className="radioSet__label">
          {title}
          {isRequired && <span className="formField__labelRequired"> *</span>}
        </p>
        <div className="radioSet__set">
          {labels.map((label, i) => (
            <InputRadio
              key={i}
              {...(register ? register(name) : register)}
              autoComplete="on"
              label={label}
              name={name}
              type={type}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          ))}
        </div>
      </div>
      {error && <div className="formField__errorMessage">{error}</div>}
    </>
  );
};
