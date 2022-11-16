import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.umd";
import * as yup from "yup";
import "./OfferForm.scss";
import { Button, FormField } from "../../ui-kit";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .matches(/^([^0-9]*)$/, "The first name must not contain numbers")
    .required("Обязательно к заполнению"),

  // phoneNumber: yup.string().required("Обязательно к заполнению"),

  // email: yup
  //   .string()
  //   .email("Проверьте, правильно ли введён email")
  //   .required("Обязательно к заполнению"),

  // date: yup
  //   .string()
  //   .required("Обязательно к заполнению")
  //   .matches(
  //     /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
  //     "Пожалуйста укажите дату в формате ГГГГ-ММ-ДД"
  //   ),
  // format: yup.string().required("Обязательно к заполнению"),
  // numberOfGuests: yup.number().required("Обязательно к заполнению"),
});

export const OfferForm = () => {
  const [isFocused, setIsFocused] = useState({
    firstName: false,
    phoneNumber: false,
    email: false,
    date: false,
    format: false,
    numberOfGuests: false,
  });
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const watchAllFields = watch();

  const onSubmit = (data) => {
    console.log("onSubmit");
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
  };

  const handleFocus = (e) => {
    console.log("handleFocus");
    setIsFocused({
      ...isFocused,
      [e.target.name]: true,
    });
  };

  const handleBlur = (e) => {
    console.log("handleBlur");
    if (watchAllFields[e.target.name] !== "") {
      setIsFocused({
        ...isFocused,
        [e.target.name]: true,
      });
    } else {
      setIsFocused({
        ...isFocused,
        [e.target.name]: false,
      });
    }
  };

  return (
    <form className="offer-form" name="offer" onSubmit={handleSubmit(onSubmit)}>
      <FormField
        label="Ваше имя"
        name="firstName"
        type="text"
        register={register}
        error={errors.firstName && errors.firstName.message}
        isFocused={isFocused.firstName}
        isRequired
        onBlur={handleBlur}
        onFocus={handleFocus}
      />

      <FormField
        label="Ваш телефон"
        name="phoneNumber"
        type="tel"
        register={register}
        error={errors.phoneNumber && errors.phoneNumber.message}
        isFocused={isFocused.phoneNumber}
        isRequired
        onBlur={handleBlur}
        onFocus={handleFocus}
      />

      <Button type="submit" name="submit">
        Отправить
      </Button>
    </form>
  );
};
