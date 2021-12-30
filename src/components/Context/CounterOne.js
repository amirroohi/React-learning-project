import { useCount, useCountActions } from "./ContextProvider";

const CounterOne = () => {
  const count = useCount();
  const dispatch = useCountActions();


  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch({type:"addOne",value:1})}>+1</button>
      <button onClick={() => dispatch({type:"addFive",value:5})}>+5</button>
      <button onClick={() => dispatch({type:"reset"})}>reset</button>
    </div>
  );
};

export default CounterOne;
