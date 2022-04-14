import React, { useState, useEffect } from "react";

const Timer = () => {
  const [secondsLeft, setSecondsLeft] = useState(10);

  const decrement = () => {
    const timerInt = setInterval(function () {
      console.log("tick");
      setSecondsLeft((curSecs) => {
        if (curSecs > 1) return curSecs - 1;
        else {
          clearInterval(timerInt);
          setSecondsLeft(0);
        }
      });
    }, 1000);
  };

  return (
    <div>
      <p>{secondsLeft}</p>
      <button onClick={decrement}>Start Countdown</button>
    </div>
  );
};

export default Timer;
