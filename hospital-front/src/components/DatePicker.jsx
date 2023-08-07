import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
// import { useSelector } from "react-redux";
import "../styles/datepicker.scss";
const DatePickerCustom = () => {
  // const orderDateList = useSelector((state) => state.order.orderDateList);
  // const selectDate = useSelector((state) => state.order.selectDate);

  const [startDate, setStartDate] = useState(new Date());
  const systemDate = new Date();
  systemDate.setHours(0, 0, 0, 0); // 시스템 날짜

  const isDateDisabled = (date) => {
    const newDate = new Date(date);
    newDate.setHours(0, 0, 0, 0);
    return newDate >= systemDate;
  };

  const handleNextDate = () => {
    const nextDate = new Date(startDate);
    nextDate.setDate(startDate.getDate() + 1);
    setStartDate(nextDate);
  };

  const handlePreviousDate = () => {
    const previousDate = new Date(startDate);
    previousDate.setDate(startDate.getDate() - 1);
    setStartDate(previousDate);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row-reverse",
        gap: "10px",
      }}
    >
      <button
        id="btn-nextDate"
        onClick={handleNextDate}
        disabled={isDateDisabled(startDate)}
      >
        <AiFillCaretRight />
      </button>
      <div style={{ width: "120px" }}>
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            console.log("변경:" + date);
          }}
          dateFormat="yyyy/MM/dd"
          className="form-control datepick secondary"
          locale={ko}
          maxDate={systemDate}
        />
      </div>

      <button id="btn-preDate" onClick={handlePreviousDate}>
        <AiFillCaretLeft />
      </button>
    </div>
  );
};

export default DatePickerCustom;
