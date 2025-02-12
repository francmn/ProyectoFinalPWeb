import React, { useState, useEffect } from "react";
import './Calendar.css'

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  return (
    <div className="calendar-container">
      <div className="calendar-date">
      
        {formatDate(currentDate)}
      </div>
      <div className="calendar-time">
        {formatTime(currentDate)}
      </div>
    </div>
  );
};

export default Calendar;
