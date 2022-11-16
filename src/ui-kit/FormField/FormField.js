import React from "react";
import "./FormField.scss";
import clsx from "clsx";
import { Input, InputPhone } from "../../ui-kit";

export const FormField = ({
  className,
  label,
  name,
  type,
  register,
  error,
  isFocused,
  isRequired,
  onBlur,
  onFocus,
}) => {
  return (
    <div
      className={clsx("FormField", className, {
        fieldSet__active: isFocused,
      })}
    >
      <label className="FormField-Label" htmlFor={name}>
        {label}
        {isRequired && <span className="FormField-LabelRequired"> *</span>}
      </label>
      {type === "text" && (
        <>
          <Input
            className={clsx({
              input__active: isFocused,
              input__error: error,
            })}
            {...(register ? register(name) : register)}
            autoComplete="on"
            error={error}
            name={name}
            type={type}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          {error && <div className="FormField-ErrorMessage">{error}</div>}
        </>
      )}
      {type === "tel" && (
        <>
          {
            <InputPhone
              className={clsx({
                input__active: isFocused,
                input__error: error,
              })}
              {...(register ? register(name) : register)}
              name={name}
              type={type}
              error={error}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          }
          {error && <div className="formField-errorMessage">{error}</div>}
        </>
      )}
    </div>
  );
};
