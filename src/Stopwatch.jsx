import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  // states
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  // useEffect
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  //functions
  const handleStart = () => {
    setRunning(true);
  };
  const handleStop = () => {
    setRunning(false);
    console.log(time);
  };
  const handleReset = () => {
    setTime(0);
    console.log(time);
  };
  // jsx
  return (
    <div className="stopwatch">
      <div className="numbers">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="buttons">
        <button onClick={() => handleStart()}>Start</button>
        <button onClick={() => handleStop()}>Stop</button>
        <button onClick={() => handleReset()}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
