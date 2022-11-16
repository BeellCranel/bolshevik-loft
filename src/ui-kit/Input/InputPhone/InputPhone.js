import React, { forwardRef } from "react";
import clsx from "clsx";
import "./InputPhone.scss";

export const InputPhone = forwardRef(
  ({ className, name, type, error, ...rest }, ref) => {
    const PATTERN = /\D/g;
    const getInputNumbersValue = (value) => {
      return value.replace(PATTERN, "");
    };

    const handlePhoneInput = (e) => {
      const input = e.target;
      let inputNumbersValue = getInputNumbersValue(input.value);
      let formattedInputValue = "";
      const selectionStart = input.selectionStart;

      if (!inputNumbersValue) {
        return (input.value = "");
      }

      if (input.value.length !== selectionStart) {
        return;
      }

      if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
        if (inputNumbersValue[0] === "9") {
          inputNumbersValue = "7" + inputNumbersValue;
        }

        const firstSymbols = inputNumbersValue[0] === "8" ? "8" : "+7";
        formattedInputValue = firstSymbols + " ";

        if (inputNumbersValue.length > 1) {
          formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
        }
        if (inputNumbersValue.length >= 5) {
          formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
        }
        if (inputNumbersValue.length >= 8) {
          formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
        }
        if (inputNumbersValue.length >= 10) {
          formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
        }
      } else {
        formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
      }

      input.value = formattedInputValue;
    };

    const handlePhoneKeyDown = (e) => {
      const input = e.target;
      if (
        e.key === "Backspace" &&
        getInputNumbersValue(input.value).length === 1
      ) {
        input.value = "";
      }
    };

    const handlePhonePast = (e) => {
      const pasted = e.clipboardData ?? window["clipboardData"];
      const input = e.target;
      const inputNumbersValue = getInputNumbersValue(input.value);

      if (pasted) {
        const pastedText = pasted.getData("Text");
        if (PATTERN.test(pastedText)) {
          input.value = inputNumbersValue;
        }
      }
    };

    return (
      <input
        className={clsx("input", className)}
        name={name}
        type={type}
        ref={ref}
        maxLength={18}
        onInput={handlePhoneInput}
        onKeyDown={handlePhoneKeyDown}
        onPaste={handlePhonePast}
        {...rest}
      />
    );
  }
);

InputPhone.displayName = "InputPhone";
