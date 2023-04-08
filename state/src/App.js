import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  console.log(Date.now());
  const handlClick = (x) => {
    setCount(x + 5);
  };
  return (
    <>
      <div>{count}</div>
      <button onClick={() => handlClick(count)}>Đếm</button>
    </>
  );
}
