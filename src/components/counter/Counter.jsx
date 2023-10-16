import React, { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function increaseCounter(num) {
    setCounter(counter + num);
  }

  function decreaseCounter(num) {
    setCounter(counter - num);
  }

  function resetCounter() {
    setCounter(0);
  }

  return (
    <div className="CounterContainer">
      <div className="Counter">
        <button className="Decrease Btn" onClick={() => decreaseCounter(1)}>
          -
        </button>
        <p
          className="CounterText"
          style={{ color: counter >= 0 ? "green" : "red" }}
        >
          {counter}
        </p>
        <button className="Increase Btn" onClick={() => increaseCounter(1)}>
          +
        </button>
      </div>

      <button className="ResetBtn" onClick={resetCounter}>
        RESET
      </button>
    </div>
  );
}
