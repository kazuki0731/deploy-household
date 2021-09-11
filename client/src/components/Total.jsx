import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const MONTH = new Date().getMonth() + 1;
const Total = () => {
  const [total, setTotal] = useState({});
  const [month, setMonth] = useState(MONTH);

  useEffect(() => {
    axios.get(`/total/${month}`).then((res) => {
      setTotal(res.data);
    });
  }, []);

  return (
    <div>
      <h2>{month}月の支出</h2>
      <p>
        総合計: <strong>{total.all}</strong> 円
      </p>
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
      <br />
      <Link to="/input">入力</Link>
      <br />
      <Link to="/">トップへ</Link>
    </div>
  );
};

export default Total;
