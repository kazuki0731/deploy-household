import React from "react";

const Category = ({ total }) => {
  return (
    <div>
      <ul>
        <li>
          食費: <strong>{total.food}</strong> 円
        </li>
        <li>
          日用品: <strong>{total.daily}</strong> 円
        </li>
        <li>
          交通費: <strong>{total.traffic}</strong> 円
        </li>
      </ul>
    </div>
  );
};

export default Category;
