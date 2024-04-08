import React from "react";
import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h2 id="number">{number}</h2>
      <button id="increase" onClick={() => {
        setNumber(number + 1);
        console.log("increase가 클릭됨");
      }}>+1</button>
      <button id="decrease" onClick={() => {
        setNumber(number - 1);
        console.log("decrease가 클릭됨");
      }}>-1</button>
    </div>
  );
}

export default Counter;