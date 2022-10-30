import React, { useState } from "react";

const useCounter = (init) => {
  const [counter, setCounter] = useState(init);

  const increment = () => {
    setCounter((prevVal) => {
      return prevVal + 1;
    });
  };
  const decrement = () => {
    setCounter((prevVal) => {
      return prevVal - 1;
    });
  };
  const setValue = (val) => {
    if (val) {
      setCounter(val);
    }
  };
  const reset = () => {
    setCounter(init);
  };

  return [counter, increment, reset, decrement, setValue];
};

export default useCounter;
