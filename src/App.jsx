import { useState } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([
    { name: "amir", age: "22", id: "1", quantity: "1" },
    { name: "sohrab", age: "31", id: "2", quantity: "1" },
    { name: "keyvan", age: "28", id: "3", quantity: "1" },
  ]);

  const addOne = (id) => {
    const index = users.findIndex((person) => person.id === id);
    const user = { ...users[index] };
    console.log(index);
};
  return (
    <div className="container">
      <div>
        <p>name :{users[2].name}</p>
        <p>age :{users[2].age}</p>
        <div>
          <button onClick={addOne}>add</button>
          <span>{users[2].quantity}</span>
          <button>sub</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

// export default App;
