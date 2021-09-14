import React from "react";

const Result = ({ myData, setIsRegist }) => {
  return (
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
  );
};

export default Result;
