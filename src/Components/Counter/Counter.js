import React from "react";
import CounterValue from "../CounterValue/CounterValue";
import Loader from "../Loader/Loader";

import "./Counter.css";

const Counter = ({ counter, setCounter, loading }) => {
  const handleDecrease = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  const handleIncrease = () => {
    if (counter < 1000) {
      if (counter == null) setCounter(counter + 2);
      else setCounter(counter + 1);
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
      {loading ? (
        <div className="loadingComponent">
          <Loader />
          <span className="loadingComponentText">
            &nbsp;&nbsp;Saving counter value
          </span>
        </div>
      ) : (
        ""
      )}
      <div className="counter">
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
      <div>
        <CounterValue counter={counter} />
      </div>
    </div>
  );
};

export default Counter;
