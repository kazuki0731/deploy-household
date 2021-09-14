import React from "react";


const Form = (props) => {
  const { submitForm, handleSubmit, register, errors } = props;
  return (
    <div>
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
          カテゴリ：
          <select {...register("category")}>
            <option value="食費">食費</option>
            <option value="日用品">日用品</option>
            <option value="交通費">交通費</option>
          </select>
        </div>
        <input type="text" placeholder="メモ" {...register("memo")} />
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
    </div>
  );
};

export default Form;
