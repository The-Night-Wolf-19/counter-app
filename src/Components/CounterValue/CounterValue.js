import React from "react";

const CounterValue = ({ counter }) => {
  return (
    <div>
      <div>{counter == null ? 1 : counter}</div>
    </div>
  );
};

export default CounterValue;
