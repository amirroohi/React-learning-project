import { useState } from "react";

const HookObject = () => {
  const [user, setUserData] = useState({ firstName: "", lastName: "" });

  const firstNameHandler = (e) => {
    console.log(e.target.value);
    setUserData({...user, firstName: e.target.value });
  };
  const lastNameHandler = (e) => {
    console.log(e.target.value);
    setUserData({...user, lastName: e.target.value });
  };
  return (
    <form>
      <input type="text" value={user.firstName} onChange={firstNameHandler} />
      <input type="text" value={user.lastName} onChange={lastNameHandler} />
      <h2>my firstName is {user.firstName}</h2>
      <h2>my firstName is {user.lastName}</h2>
      <div>{JSON.stringify(user)}</div>
    </form>
  );
};

export default HookObject;
