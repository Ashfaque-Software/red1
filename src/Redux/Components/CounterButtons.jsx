import React from "react";
import { useDispatch } from "react-redux";
import { handleAddActionObj, handleReduceActionObj } from "../Redux/action";

const CounterButtons = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(handleAddActionObj())}>Increment</button>
      <button onClick={() => dispatch(handleReduceActionObj())}>Decrement</button>
    </div>
  );
};

export default CounterButtons;
