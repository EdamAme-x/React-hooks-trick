import React, { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timeoutId;

    if (isRunning) {
      timeoutId = setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [count, isRunning]);

  const stopTimer = () => {
    setIsRunning(false);
  };

  return (
    <>
      <h1>I've rendered {count} times!</h1>
      <button onClick={stopTimer}>stop</button>
    </>
  );
}