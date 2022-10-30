import React from "react";
import UiDesign from "../components/UiDesign";
import useCounter from "../hooks/useCounter";

const CounterPage = () => {
  const [counter, increment, reset, decrement, setValue] = useCounter(0);

  const handleIncrement = () => {
    increment();
  };
  const handleDecrement = () => {
    decrement();
  };
  const handleReset = () => {
    reset();
  };
  const handleValue = (number) => {
    const newNumber = number * 1;
    setValue(newNumber);
  };
  return (
    <UiDesign
      onIncrease={handleIncrement}
      value={counter}
      onDecrease={handleDecrement}
      onReset={handleReset}
      onAddValue={handleValue}
    />
  );
};

export default CounterPage;
