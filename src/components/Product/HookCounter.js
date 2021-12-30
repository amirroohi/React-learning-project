import { useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);

  const addOneHandler = () => {
    setCount(prvCount=> prvCount +1);
};

  const addTwoHandler = () => {
    for(let i =0;i < 2;i++){
        setCount(prvCount=> prvCount +1);
    }  };

  const addFiveHandler = () => {
    // setCount(count + 5);
    for(let i =0;i < 5;i++){
        setCount(prvCount=> prvCount +1);
    }
  };
  return (
    <div>
      <h2>count - {count}</h2>
      <button onClick={addOneHandler}>add one</button>
      <button onClick={addTwoHandler}>add two</button>
      <button onClick={addFiveHandler}>add five</button>
    </div>
  );
};

export default HookCounter;