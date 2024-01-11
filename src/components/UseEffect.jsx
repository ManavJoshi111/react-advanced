import React, { useState, useEffect } from "react";

export const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Each time render");
  });
  useEffect(() => {
    console.log("Initial");
  }, []);
  useEffect(() => {
    console.log("Only once and when count changes");
  }, [count]);
  return (
    <>
      <center>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
      </center>
    </>
  );
};
