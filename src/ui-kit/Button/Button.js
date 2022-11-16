import React, { memo } from "react";
import clsx from "clsx";
import "./Button.scss";

const ButtonComponent = ({
  className,
  children,
  typeIcon,
  isDisabled = false,
  onClick,
  ...rest
}) => {
  return (
    <button
      className={clsx("button", className, {
        button__disabled: isDisabled,
      })}
      disabled={isDisabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export const Button = memo(ButtonComponent);
