import React from "react";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div>
      <h1>Topです</h1>
      <Link to="/input">入力</Link>
      <br />
      <Link to="/total">合計</Link>
    </div>
  );
};

export default Top;
