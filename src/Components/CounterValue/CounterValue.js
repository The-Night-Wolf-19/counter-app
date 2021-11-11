import React from "react";
import "./CounterValue.css";
const CounterValue = ({ counter }) => {
  return (
    <div className="counterValueDiv">
      <span>Counter value:&nbsp;{counter == null ? 1 : counter}</span>
    </div>
  );
};

export default CounterValue;
