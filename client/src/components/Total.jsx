import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import axios from "axios";
import { makeStyles } from "@material-ui/core";

const MONTH = new Date().getMonth() + 1;

const useStyles = makeStyles({
  disabled: {
    pointerEvents: "none",
    opacity: 0.3,
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
    console.log(res.data);
    setPageLength(res.data.pageLength);
  };

  useEffect(() => {
    getMonthTotal(month);
  }, []);

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

  return (
    <div>
      <h2>{month}月の支出</h2>
      <p>
        総合計: <strong>{total.all}</strong>円{" "}
        <span
          className={pageLength || classes.disabled}
          onClick={() => clickGetDetail(nowPage)}
        >
          {isDetailDisplay ? (
            <strong>閉じる</strong>
          ) : (
            <strong>詳細&gt;&gt;</strong>
          )}
        </span>
      </p>
      {isDetailDisplay && (
        <div>
          <span>{nowPage}</span>
          <ul>
            {details.map((detail, index) => (
              <li key={index}>
                <span>{detail.category}</span>
                <span>（{detail.memo}）</span>
                <span>{detail.money}円</span>
                <span> {detail.date}</span>
                <button onClick={() => clickDelete(detail.id, index)}>
                  削除
                </button>
              </li>
            ))}
          </ul>
          <ul>
            <li
              className={nowPage === 1 ? classes.disabled : ""}
              onClick={() => clickGetPage(nowPage - 1)}
            >
              &lt;&lt;
            </li>
            {Array(pageLength)
              .fill(0)
              .map((val, index) => (
                <span
                  className={nowPage === index + 1 ? classes.disabled : ""}
                  key={index}
                  onClick={() => clickGetPage(index + 1)}
                >
                  {" "}
                  {index + 1}{" "}
                </span>
              ))}
            <li
              className={nowPage === pageLength ? classes.disabled : ""}
              onClick={() => clickGetPage(nowPage + 1)}
            >
              &gt;&gt;
            </li>
          </ul>
        </div>
      )}
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
      <ul>
        <li>
          <span onClick={() => clickChangeMonth(month - 1)}>
            &lt;&lt; <strong>{month === 1 ? 12 : month - 1}</strong>月へ
          </span>
        </li>
        <li>
          <span onClick={() => clickChangeMonth(month + 1)}>
            <strong>{month === 12 ? 1 : month + 1}</strong>月へ &gt;&gt;
          </span>
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
