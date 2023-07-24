import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // DatePicker의 기본 스타일을 import
import BreadcrumbsDropdown from "./BreadcrumbsDropdown";
function DatePickerCustom() {
  const [startDate, setStartDate] = useState(new Date());
  const datePickerStyle = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "8px",
    color: "#333",
    // ... other desired styles
  };

  return (
    <div
      style={{
        display: "flex",
        // flexDirection: "row-reverse",
        margin: "15px 0",
      }}
    >
      <BreadcrumbsDropdown />
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        // includeDates={[new Date(), addDays(new Date(), 1)]}
        placeholderText="This only includes today and tomorrow"
        style={datePickerStyle} // 인라인 스타일로 지정
      />
    </div>
  );
}

export default DatePickerCustom;
