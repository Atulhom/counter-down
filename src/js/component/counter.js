import React, { useState } from "react";
import ReactDOM from "react-dom";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{count} likes</h2>
      <span onClick={() => setCount(count + 1)}>👍🏽</span>
      <span onClick={() => setCount(count - 1)}>👎🏽</span>
      <h3>Like or dislike to increase/decrease</h3>
    </div>
  );
};


export default Counter;