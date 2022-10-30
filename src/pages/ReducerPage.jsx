import React, { useReducer } from "react";
import UiDesign from "../components/UiDesign";

const initValue = {
  counter: 0,
};

const counterReducer = (state, action) => {
  if (action.type === "INCREMENT") {
    const newCounter = state.counter + 1;
    return { counter: newCounter };
  }
  if (action.type === "DECREMENT") {
    const newCounter = state.counter - 1;
    return { counter: newCounter };
  }
  if (action.type === "RESET") {
    return initValue;
  }
  if (action.type === "ADD_VALUE") {
    const newValue = action.number * 1;
    return { counter: newValue };
  }
};
const ReducerPage = () => {
  const [counter, dispatchCounter] = useReducer(counterReducer, initValue);

  const handleIncrement = () => {
    dispatchCounter({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatchCounter({ type: "DECREMENT" });
  };
  const handleReset = () => {
    dispatchCounter({ type: "RESET" });
  };
  const handleValue = (number) => {
    dispatchCounter({ type: "ADD_VALUE", number });
  };
  return (
    <UiDesign
      onIncrease={handleIncrement}
      value={counter?.counter}
      onDecrease={handleDecrement}
      onReset={handleReset}
      onAddValue={handleValue}
    />
  );
};

export default ReducerPage;
