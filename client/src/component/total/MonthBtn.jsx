import React from "react";

const MonthBtn = (props) => {
  const { classes, month, clickChangeMonth } = props;
  return (
    <div>
      <ul className={classes.flex}>
        <li className={classes.pointer}>
          <span
            className={classes.btn}
            onClick={() => clickChangeMonth(month - 1)}
          >
            &lt;&lt; <strong>{month === 1 ? 12 : month - 1}</strong>月へ
          </span>
        </li>
        <li className={classes.pointer}>
          <span
            className={classes.btn}
            onClick={() => clickChangeMonth(month + 1)}
          >
            <strong>{month === 12 ? 1 : month + 1}</strong>月へ &gt;&gt;
          </span>
        </li>
      </ul>
    </div>
  );
};

export default MonthBtn;
