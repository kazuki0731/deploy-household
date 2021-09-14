import React from "react";

const List = (props) => {
  const { details, clickDelete } = props;
  return (
    <div>
      <ul>
        {details.map((detail, index) => (
          <li key={index}>
            <span>{detail.category}</span>
            <span>（{detail.memo}）</span>
            <span>{detail.money}円</span>
            <span> {detail.date}</span>
            <button onClick={() => clickDelete(detail.id, index)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
