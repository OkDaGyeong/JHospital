import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // React Datepicker CSS
import ko from "date-fns/locale/ko";

import { Button } from "react-bootstrap";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

import "../styles/datepicker.scss";
const DatePickerCustom = () => {
  const [startDate, setStartDate] = useState(new Date());
  const systemDate = new Date(); // 시스템 날짜
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
      <button id="btn-preDate" onClick={handleNextDate}>
        <AiFillCaretRight />
      </button>
      <div style={{ width: "120px" }}>
        <DatePicker
          style={{ width: "150px" }}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy/MM/dd"
          className="form-control datepick secondary"
          locale={ko}
          maxDate={systemDate}
        />
      </div>

      <button id="btn-nextDate" onClick={handlePreviousDate}>
        <AiFillCaretLeft />
      </button>
    </div>
  );
};

export default DatePickerCustom;
