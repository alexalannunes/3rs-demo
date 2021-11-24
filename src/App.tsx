import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./counter/counterSlice";
import { Reducer } from "@reduxjs/toolkit";

interface ICounter {
  counter: {
    value: number;
  };
}

function App() {
  const count = useSelector((state: ICounter) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>+</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
