import React, { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [inputSeconds, setInputSeconds] = useState(0);
  const [inputMinutes, setInputMinutes] = useState(0);

  const decrement = () => {
    const timerInt = setInterval(function () {
      setSecondsLeft((curSecs) => {
        if (curSecs > 1) return curSecs - 1;
        else {
          clearInterval(timerInt);
          setSecondsLeft(0);
        }
      });
    }, 1000);
  };

  const handleChangeMin = (event) => {
    setInputMinutes((prev) => +event.target.value);
  };
  const handleChangeSec = (event) => {
    setInputSeconds((prev) => +event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalSeconds = inputMinutes * 60 + inputSeconds;
    setSecondsLeft((prev) => totalSeconds);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            autoComplete="off"
            size="4"
            type="text"
            name="minutes"
            placeholder="minutes..."
            value={inputMinutes}
            onChange={handleChangeMin}
          />
          <input
            autoComplete="off"
            size="4"
            type="text"
            name="seconds"
            placeholder="seconds..."
            value={inputSeconds}
            onChange={handleChangeSec}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h1>{secondsLeft}</h1>
      <button onClick={decrement}>Start</button>
      <button onClick={decrement}>Pause</button>
      <button onClick={decrement}>Reset</button>
    </div>
  );
};

export default Timer;
