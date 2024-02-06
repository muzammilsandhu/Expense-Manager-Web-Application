import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../../css/ExpenseApp/Modal.scss";
import calendarIcon from "../../../Images/calender.png";

const Date = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="date-picker-wrapper">
      <DatePicker
        className="date-form"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        placeholderText="Date"
      />
      <img src={calendarIcon} alt="Calendar icon" className="calendar-icon" />
    </div>
  );
};

export default Date;
