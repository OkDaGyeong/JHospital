// YourComponent.jsx

import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // React Datepicker CSS
import ko from "date-fns/locale/ko";

import { Button } from "react-bootstrap";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

import "../styles/datepicker.scss";
const DatePickerCustom = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row-reverse",
        gap: "10px",
      }}
    >
      {/* <Button variant="outline-secondary" size="sm">
        <AiFillCaretRight />
      </Button> */}
      <button id="btn-preDate">
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
        />
      </div>
      {/* <Button variant="outline-secondary" size="sm">
        <AiFillCaretLeft />
      </Button> */}
      <button id="btn-nextDate">
        <AiFillCaretLeft />
      </button>
    </div>
  );
};

export default DatePickerCustom;
