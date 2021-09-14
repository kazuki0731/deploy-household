import React, { useEffect, useState, createContext } from "react";
import dayjs from "dayjs";
import axios from "axios";
import { makeStyles } from "@material-ui/core";
import Sum from "../component/total/Sum";
import List from "../component/total/List";
import PagiNation from "../component/total/PagiNation";
import UserContext from "../context/UserContext";
import Category from "../component/total/Category";
import MonthBtn from "../component/total/MonthBtn";

export const pagingContext = createContext();

const MONTH = new Date().getMonth() + 1;

const useStyles = makeStyles({
  disabled: {
    pointerEvents: "none",
    opacity: 0.3,
  },
  flex: {
    padding: 0,
    display: "flex",
    justifyContent: "center",
    "& li": {
      marginLeft: 5,
      marginRight: 5,
    },
  },
  btn: {
    cursor: "pointer",
    "&:hover": {
      opacity: "0.6",
    },
  },
  test: {
    color: "red",
  },
  border: {
    border: "1px solid blue",
  },
});

const Total = () => {
  const [total, setTotal] = useState({});
  const [month, setMonth] = useState(MONTH);
  const [details, setDetails] = useState([]);
  const [isDetailDisplay, setIsDetailDisplay] = useState(false);
  const [nowPage, setNowPage] = useState(1);
  const [pageLength, setPageLength] = useState("");
  const classes = useStyles();

  const getPage = async (page) => {
    const res = await axios.get(`/total/detail/${month}/${page}`);
    res.data.map((data) => {
      if (data.date) {
        const str = dayjs(data.date).format("MM/DD(ddd)");
        data.date = str;
      }
      return data;
    });
    setDetails([...res.data]);
  };

  const getMonthTotal = async (month) => {
    const res = await axios.get(`/total/${month}`);
    setTotal(res.data);
    setPageLength(res.data.pageLength);
  };

  useEffect(() => {
    getMonthTotal(month);
  }, [month]);

  useEffect(() => {
    if (month > 12) {
      setMonth(1);
    } else if (month < 1) {
      setMonth(12);
    }
  }, [month]);

  const clickChangeMonth = async (month) => {
    if (month > 12) {
      month = 1;
    } else if (month < 1) {
      month = 12;
    }
    getMonthTotal(month);
    setMonth(month);
    setIsDetailDisplay(false);
    setNowPage(1);
  };

  const clickGetDetail = (page) => {
    getPage(page);
    setIsDetailDisplay(!isDetailDisplay);
  };

  const clickGetPage = (page) => {
    getPage(page);
    setNowPage(page);
  };

  const clickDelete = async (detailId, detailIndex) => {
    const res = await axios.delete("/total/detail", { data: { id: detailId } });
    if (res.data === "OK") {
      details.map((detail, index) => {
        index === detailIndex && details.splice(index, 1);
        return detail;
      });
      setDetails([...details]);
    }
  };

  const pagingValue = {
    classes: classes,
    nowPage: nowPage,
    pageLength: pageLength,
    clickGetPage: clickGetPage,
  };

  return (
    <div>
      <h2>{month}月の支出</h2>
      <Sum
        classes={classes}
        total={total}
        pageLength={pageLength}
        nowPage={nowPage}
        isDetailDisplay={isDetailDisplay}
        clickGetDetail={clickGetDetail}
      />
      {isDetailDisplay && (
        <div className={classes.border}>
          <span>{nowPage}</span>
          <List details={details} clickDelete={clickDelete} />
          <UserContext value={pagingValue}>
            <PagiNation />
          </UserContext>
        </div>
      )}
      <Category total={total} />
      <MonthBtn
        classes={classes}
        month={month}
        clickChangeMonth={clickChangeMonth}
      />
    </div>
  );
};

export default Total;
