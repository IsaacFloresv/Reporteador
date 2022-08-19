import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarWidget = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Calendar className='border border-0 w-100' onChange={onChange} value={value}/>
    </div>
  );
};

export default CalendarWidget;
