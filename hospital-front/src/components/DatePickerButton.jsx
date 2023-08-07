import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import "../styles/datepicker.scss";

import { useDispatch } from "react-redux";
import { setSelectDate } from "../modules/order";

const DatePickerButton = ({ orderDateList, selectDate, reViewPatient }) => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(new Date());

  // orderDateList를 Date 객체로 변환
  const formattedOrderDateList = orderDateList.map((dateString) => {
    const year = parseInt(dateString.slice(0, 4));
    const month = parseInt(dateString.slice(4, 6)) - 1; // 0-based index for months in JavaScript
    const day = parseInt(dateString.slice(6, 8));
    return new Date(year, month, day, 0, 0, 0);
  });

  useEffect(() => {
    const year = parseInt(selectDate.slice(0, 4));
    const month = parseInt(selectDate.slice(4, 6)) - 1; // 0-based index for months in JavaScript
    const day = parseInt(selectDate.slice(6, 8));

    const dateObj = new Date(year, month, day, 0, 0, 0);
    if (!isNaN(dateObj.getTime())) {
      setSelectedDate(dateObj);
    }
  }, [selectDate]);

  const handlePreviousDay = () => {
    const previousDay = new Date(selectedDate);
    previousDay.setDate(selectedDate.getDate() - 1);
    if (
      formattedOrderDateList.some(
        (date) => date.getTime() === previousDay.getTime()
      )
    ) {
      setSelectedDate(previousDay);
      reloadData(previousDay);
    }
  };

  const handleNextDay = () => {
    const nextDay = new Date(selectedDate);
    nextDay.setDate(selectedDate.getDate() + 1);
    if (
      formattedOrderDateList.some(
        (date) => date.getTime() === nextDay.getTime()
      )
    ) {
      setSelectedDate(nextDay);
      reloadData(nextDay);
    }
  };

  const reloadData = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const yyyyMMdd = `${year}${month}${day}`;
    dispatch(setSelectDate(yyyyMMdd));
    reViewPatient(yyyyMMdd);
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
      <div>
        <button id="btn-preDate" onClick={handlePreviousDay}>
          <AiFillCaretLeft />
        </button>
        <div
          style={{
            width: "120px",
            display: "inline-block",
            margin: "0 10px",
          }}
        >
          <DatePicker
            selected={selectedDate}
            onChange={(date) => reloadData(date)}
            dateFormat="yyyy/MM/dd"
            className="form-control datepick secondary"
            locale={ko}
            filterDate={(date) =>
              formattedOrderDateList.some(
                (formattedDate) =>
                  formattedDate.getFullYear() === date.getFullYear() &&
                  formattedDate.getMonth() === date.getMonth() &&
                  formattedDate.getDate() === date.getDate()
              )
            }
          />
        </div>
        <button id="btn-nextDate" onClick={handleNextDay}>
          <AiFillCaretRight />
        </button>
      </div>
    </div>
  );
};

export default DatePickerButton;
