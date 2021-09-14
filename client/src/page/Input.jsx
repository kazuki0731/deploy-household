import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import Result from "../component/input/Result";
import Form from "../component/input/Form";

const Input = () => {
  const [isRegist, setIsRegist] = useState(false);
  const [myData, setMyData] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitForm = (data) => {
    axios.put("/input", data).then((res) => {
      const { money, category, memo, date } = data;
      if (res.data === "OK") {
        setMyData({ money: money, category: category, memo: memo, date: date });
        setIsRegist(true);
        reset();
      }
    });
  };

  return (
    <div>
      <h1>支出を入力</h1>
      <Form
        submitForm={submitForm}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
      />
      {isRegist && <Result myData={myData} setIsRegist={setIsRegist} />}
    </div>
  );
};

export default Input;
