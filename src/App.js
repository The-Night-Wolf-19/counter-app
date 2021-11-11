import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import api from "./api";
import Counter from "./Components/Counter/Counter";

function App() {
  const [counter, setCounter] = useState(null);
  const [loading, setLoading] = useState(false);
  let timer_ref = useRef(null);
  useEffect(() => {
    const getCounter = async () => {
      try {
        let response = await api.get("/shubhamsinhaIITBHU.json");

        if (response.status === 200) {
          console.log(response.data, "got data");
          if (response.data !== null) setCounter(Number(response.data));
        }
      } catch (error) {
        console.log(error);
      }
    };

    getCounter();
  }, []);

  useEffect(() => {
    const saveCounter = async () => {
      try {
        setLoading(true);
        console.log("saving");
        let response = await api.put(".json", {
          shubhamsinhaIITBHU: counter,
        });
        if (response.status === 200) {
          console.log("saved", counter);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    const debounce = function (fn, d) {
      return function () {
        let context = this;
        clearTimeout(timer_ref.current);
        timer_ref.current = setTimeout(() => {
          saveCounter.apply(context);
        }, d);
      };
    };
    const saveData = debounce(saveCounter, 300);
    if (counter != null) saveData();
  }, [counter]);
  return (
    <div className="App">
      <Counter counter={counter} setCounter={setCounter} loading={loading} />
    </div>
  );
}

export default App;
