import { useState } from "react";
const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);
  return (
    <div className="user-card">
      <h2>Count : {count}</h2>
      <h2>Count2 : {count2}</h2>
      <h2>Name : {props.name}</h2>
      <h2>Location : Bhopal</h2>
      <h2>Contct No : 6264559192</h2>
    </div>
  );
};
export default User;
