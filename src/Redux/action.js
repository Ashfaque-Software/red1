import { ADD, REDUCE } from "./actionTypes";

// Function to return the add action object
const handleAddActionObj = () => ({
  type: ADD
});

// Function to return the reduce action object
const handleReduceActionObj = () => ({
  type: REDUCE
});

export { handleAddActionObj, handleReduceActionObj };
