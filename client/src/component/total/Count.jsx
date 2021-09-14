import React, { useContext } from "react";
import { userContext } from "../../context/UserContext";

const Count = () => {
  const { classes, pageLength, nowPage, clickGetPage } = useContext(
    userContext
  );
  return (
    <div>
      <ul className={classes.flex}>
        {Array(pageLength)
          .fill(0)
          .map((val, index) => (
            <li
              className={nowPage === index + 1 ? classes.disabled : classes.btn}
              key={index}
              onClick={() => clickGetPage(index + 1)}
            >
              {" "}
              {index + 1}{" "}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Count;
