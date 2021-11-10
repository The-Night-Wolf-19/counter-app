import React, { useState } from "react";
import Loader from "../Loader/Loader";

import "./Counter.css";

const Counter = ({ counter, setCounter }) => {
  const handleDecrease = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  const handleIncrease = () => {
    if (counter < 1000) {
      setCounter(counter + 1);
    }
  };
  const handleChange = (val) => {
    console.log(val);
    if (isNaN(val) || val == "" || val <= 0 || val == null) {
      setCounter(1);
    } else if (val > 1000) {
      setCounter(1000);
    } else {
      setCounter(val);
    }
  };
  return (
    <div className="counterComponent">
      <div className="loadingComponent">
        <Loader />
        <span>&nbsp;&nbsp;Saving counter value</span>
      </div>
      <div className="counter">
        {/* <Loader /> */}
        <div className="decreaseBtn" onClick={handleDecrease}>
          -
        </div>
        <input
          className="inputField"
          type="number"
          value={counter == null ? 1 : counter}
          onChange={(e) => handleChange(e.target.value)}
        ></input>
        <div className="increaseBtn" onClick={handleIncrease}>
          +
        </div>
      </div>
    </div>
  );
};

export default Counter;
