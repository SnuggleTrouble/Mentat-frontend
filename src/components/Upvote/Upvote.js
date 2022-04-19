import React, { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  const supportCount = () => setCounter(counter + 1);

  return (
    <div>
      <h1 className="counter">{counter}</h1>

      <button className="supportCount" onClick={supportCount}>
        Support
      </button>
    </div>
  );
}
