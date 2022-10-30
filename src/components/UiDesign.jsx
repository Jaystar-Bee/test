import React, { useState } from "react";

import classes from "./uiDesign.module.css";
const UiDesign = (props) => {
  const [number, setNumber] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (number.length === 0) {
      return;
    }
    props.onAddValue(number);
    setNumber("");
  };
  return (
    <div className={classes.cover}>
      <h2 className={classes.counter}>{props.value}</h2>
      <div className={classes.buttons}>
        <button onClick={props.onIncrease}>Increase</button>
        <button onClick={props.onReset}>Reset</button>
        <button onClick={props.onDecrease}>Decrease</button>
      </div>
      <div>
        <form className={classes.form} onSubmit={handleSubmit}>
          <input
            type="number"
            value={number}
            placeholder="0"
            onChange={(e) => setNumber(e.target.value)}
          />
          <button type="submit">add value</button>
        </form>
      </div>
    </div>
  );
};

export default UiDesign;
