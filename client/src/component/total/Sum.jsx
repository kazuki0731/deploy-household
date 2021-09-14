import React from "react";

const Sum = (props) => {
  const {
    classes,
    total,
    pageLength,
    nowPage,
    isDetailDisplay,
    clickGetDetail,
  } = props;
  return (
    <div>
      <p>
        総合計: <strong>{total.all}</strong>円{" "}
        <span
          className={pageLength || classes.disabled}
          onClick={() => clickGetDetail(nowPage)}
        >
          {isDetailDisplay ? (
            <strong className={classes.btn}>閉じる&lt;&lt;</strong>
          ) : (
            <strong className={classes.btn}>詳細&gt;&gt;</strong>
          )}
        </span>
      </p>
    </div>
  );
};

export default Sum;
