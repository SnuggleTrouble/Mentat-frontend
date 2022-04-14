import React, { useState } from "react";

export function Counter () {
    const [counter, setCounter] = useState(0);

    const incrementCount = () => setCounter(counter  + 1);
    const decrementCount = () => setCounter(counter  - 1);
  
    return (
      <div>
        <h1 className="counter">{counter}</h1>

        <button className="increment" onClick={incrementCount}>
            Increment
        </button>

        <button className="decrement" onClick={decrementCount}>
            Decrement
        </button>
      </div>
    );
    }