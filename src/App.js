import "./App.css";
import React, { useState, useEffect } from "react";
import api from "./api";
import Counter from "./Components/Counter/Counter";
import CounterValue from "./Components/CounterValue/CounterValue";

function App() {
  const [counter, setCounter] = useState(null);
  const [loading, setLoading] = useState(false);
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
        console.log("saving");
        let response = await api.put(".json", {
          shubhamsinhaIITBHU: counter,
        });
        if (response.status === 200) {
          console.log("saved", counter);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (counter != null) saveCounter();
  }, [counter]);
  return (
    <div className="App">
      <Counter counter={counter} setCounter={setCounter} />
      <CounterValue counter={counter} />
    </div>
  );
}

export default App;
