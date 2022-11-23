import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.umd";
import * as yup from "yup";
import "./OfferForm.scss";
import { Button, FormField, RadioGroup } from "../../ui-kit";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "минимум 2 символа")
    .max(30, "максимум 30 символов")
    .matches(/^([^0-9]*)$/, "имя не может содержать цифры")
    .required("обязательно к заполнению"),

  phoneNumber: yup.string().required("обязательно к заполнению"),

  email: yup
    .string()
    .email("проверьте, правильно ли введён email")
    .required("обязательно к заполнению"),

  date: yup
    .string()
    .required("обязательно к заполнению")
    .matches(
      /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
      "пожалуйста укажите дату в формате ГГГГ-ММ-ДД"
    ),
  format: yup.string().required("обязательно к заполнению").nullable(),
  numberOfGuests: yup
    .string()
    .matches(/^([0-9]*)$/, "используйье символы от 0 до 9")
    .required("обязательно к заполнению"),
});

const radioLabels = ["Банкет", "Фуршет", "Концеренция", "Другое"];

export const OfferForm = ({ onClose }) => {
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
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const watchAllFields = watch();

  const onSubmit = (data) => {
    onClose();
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    reset();
  };

  const handleFocus = (e) => {
    setIsFocused({
      ...isFocused,
      [e.target.name]: true,
    });
  };

  const handleBlur = (e) => {
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

      <FormField
        label="Ваш email"
        name="email"
        type="text"
        register={register}
        error={errors.email && errors.email.message}
        isFocused={isFocused.email}
        isRequired
        onBlur={handleBlur}
        onFocus={handleFocus}
      />

      <FormField
        label="Подходящая дата"
        name="date"
        type="date"
        register={register}
        error={errors.date && errors.date.message}
        isFocused={isFocused.date}
        isRequired
        onBlur={handleBlur}
        onFocus={handleFocus}
      />

      <RadioGroup
      className="offer-form__radioGroup"
        labels={radioLabels}
        name="format"
        title="Формат мероприятия"
        type="radio"
        register={register}
        error={errors.format && errors.format.message}
        isFocused={isFocused.format}
        isRequired
        onBlur={handleBlur}
        onFocus={handleFocus}
      />

      <FormField
        label="Количество гостей"
        name="numberOfGuests"
        type="text"
        register={register}
        error={errors.numberOfGuests && errors.numberOfGuests.message}
        isFocused={isFocused.numberOfGuests}
        isRequired
        onBlur={handleBlur}
        onFocus={handleFocus}
      />

      <Button className="offer-form__submit" type="submit" name="submit">
        Отправить
      </Button>
    </form>
  );
};
