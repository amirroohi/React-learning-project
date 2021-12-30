import React, { useContext, useReducer, useState } from "react";

export const CounterContext = React.createContext();
export const CounterContextDispatcher = React.createContext();

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

const CounterProvider = ({ children }) => {
    const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={dispatch}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;

export const useCount = () => useContext(CounterContext);
export const useCountActions = () => {
  return useContext(CounterContextDispatcher);

//   const addOne = () => {
//     setCount((prevCount) => prevCount + 1);
//   };

//   const addFive = () => {
//     setCount((prevCount) => prevCount + 5);
//   };

//   return { addOne, addFive };
};
