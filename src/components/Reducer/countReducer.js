import { useReducer, useState } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "addOne":
      return state + action.value;
    case "addFive":
      return state + action.value;
    case "reset":
      return initialState;

    default:
      return state;
  }
};

const CountReducer = () => {
  //   const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch({ type: "addOne", value: 1 })}>
          +1
        </button>
        <button onClick={() => dispatch({ type: "addFive", value: 5 })}>
          +5
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      </div>
      <h2>{countTwo}</h2>
      <div>
        <button onClick={() => dispatchTwo({ type: "addOne", value: 1 })}>
          +1
        </button>
        <button onClick={() => dispatchTwo({ type: "addFive", value: 5 })}>
          +5
        </button>
        <button onClick={() => dispatchTwo({ type: "reset" })}>reset</button>
      </div>
    </div>
  );
};

export default CountReducer;
