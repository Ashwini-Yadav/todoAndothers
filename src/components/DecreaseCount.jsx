import React, { useState } from "react";

const DecreaseCount = () => {
  let [count, setCount] = useState(3600);
  let interval;
  let handleTimer = () => {
    if (count > 0) {
      interval = setInterval(() => {
        setCount((prevValue) => {
          if (prevValue <= 0) {
            clearInterval(interval);
            return 0;
          }
          return prevValue - 1;
        });
      }, 1000);
    }
  };

  return (
    <>
      <h1>Decrease Count</h1>
      <div className="card" style={{margin:"10px auto"}}>
        <span>{count}</span>
        <button onClick={handleTimer}>Click to start</button>
      </div>
    </>
  );
};

export default DecreaseCount;
