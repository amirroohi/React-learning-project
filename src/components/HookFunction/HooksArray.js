import React, { useState } from "react";

const HooksArray = () => {
  const [item, setItem] = useState([]);

  const addItemHandler = () => {
    setItem([
      ...item,
      { id: item.length, number: Math.floor(Math.random() * 10) },
    ]);
  };
  return (
    <div>
      <button onClick={addItemHandler}>add item</button>
      {item.map((item) => {
        return <li key={item.id}>{item.number}</li>;
      })}
    </div>
  );
};

export default HooksArray;
