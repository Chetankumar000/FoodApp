import React, { useState } from "react";

function User({ name }) {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h2> Name : {name}</h2>
      <h3>Location : Mumbai</h3>
      <h4> Contact : @chetanmistry000</h4>
    </div>
  );
}

export default User;
