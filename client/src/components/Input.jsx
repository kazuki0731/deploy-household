import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

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
      if (res === "OK") {
        setMyData({ money: money, category: category, memo: memo, date: date });
        setIsRegist(true);
      }
    });
    reset();
  };

  return (
    <div>
      <h1>Inputです</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <input
          type="text"
          placeholder="金額"
          {...register("money", {
            required: "金額は必須です",
            pattern: {
              value: /^[0-9]+$/,
              message: "整数で入力してください",
            },
          })}
        />
        <br />
        {errors.money && errors.money.message}
        <div>
          カテゴリー：
          <select {...register("category")}>
            <option value="food">食費</option>
            <option value="daily">日用品</option>
            <option value="traffic">交通費</option>
          </select>
        </div>
        <input type="" placeholder="メモ" {...register("memo")} />
        <br />
        <input
          type="date"
          name="calendar"
          min="2021-01-01"
          max="2021-12-31"
          {...register("date", { required: "日付を設定してください" })}
        />
        <br />
        {errors.date && errors.date.message}
        <br />
        <input type="submit" value="保存" />
      </form>
      {isRegist && (
        <div>
          <strong>登録できました!</strong>
          <ul style={{ listStyle: "none", padding: 0, margin: "5px" }}>
            <li>金額: {myData.money}</li>
            <li>カテゴリ: {myData.category}</li>
            <li>メモ: {myData.memo}</li>
            <li>日付: {myData.date}</li>
          </ul>
          <button onClick={() => setIsRegist(false)}>閉じる</button>
        </div>
      )}
      <Link to="/total">合計</Link>
      <br />
      <Link to="/">トップへ</Link>
    </div>
  );
};

export default Input;
