import React, { useContext } from "react";
import { userContext } from "../../context/UserContext";

const SideBtn = ({ children }) => {
  const { classes, nowPage, pageLength, clickGetPage } = useContext(
    userContext
  );
  return (
    <div>
      <ul className={classes.flex}>
        <li
          className={nowPage === 1 ? classes.disabled : classes.btn}
          onClick={() => clickGetPage(nowPage - 1)}
        >
          &lt;&lt;
        </li>
        {children}
        <li
          className={nowPage === pageLength ? classes.disabled : classes.btn}
          onClick={() => clickGetPage(nowPage + 1)}
        >
          &gt;&gt;
        </li>
      </ul>
    </div>
  );
};

export default SideBtn;
