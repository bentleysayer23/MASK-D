import React, { useEffect, useState } from "react";
import "./TimerStyles.css";

const CountdownTimer = () => {
  const deadline = "February 27, 2023 9:00:00";
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = () => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline]);

  return (
    <div className="Clock-Wrapper">
      <div className="Clock-Box">
        <p>{leading0(days)}</p> <p>Days</p>
      </div>
      <div className="Clock-Box">
        <p>{leading0(hours)} </p>
        <p>Hours</p>
      </div>
      <div className="Clock-Box">
        <p>{leading0(minutes)}</p>
        <p>Minutes</p>
      </div>
      <div className="Clock-Box">
        <p>{leading0(seconds)}</p> <p>Seconds</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
